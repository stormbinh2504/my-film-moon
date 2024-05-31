import axios from 'axios';
import { reduxStore, dispatch } from './redux/store';
import * as actions from './redux/actions';
import * as queryString from "query-string";
import { Random } from './utils';

const globalVar = window._env_
let instance = axios.create({
    // baseURL: URL,
    // withCredentials: true,
    headers: { "Content-Type": "application/json" },
    timeout: 10000
});

const createError = (httpStatusCode, statusCode, errorMessage, problems, errorCode = '', errorData) => {
    const error = new Error();
    error.httpStatusCode = httpStatusCode;
    error.statusCode = statusCode;
    error.errorMessage = errorMessage;
    error.problems = problems;
    error.errorCode = errorCode + "";
    error.data = errorData
    return error;
};

export const isSuccessStatusCode = (s) => {
    // May be string or number
    const statusType = typeof s;
    return (statusType === 'number' && s === 0) || (statusType === 'string' && s.toUpperCase() === 'OK');
};

const isTokenExpiredError = (response) => {
    if (response.status !== 403) {
        return false;
    }
    return true;
};

let isRefreshingAccessToken = false;

// This is the list of waiting requests that will retry after the token refresh complete
let subscribers = [];

const resetTokenAndReattemptRequest = (error) => {
    try {
        const { response: errorResponse } = error;
        const state = reduxStore.getState();
        const refreshToken = state.user.token != null ? state.user.token['refresh_token'] : null;
        if (!refreshToken) {
            // We can't refresh, throw the error anyway
            return Promise.reject(error);
        }

        /*
         * Proceed to the token refresh procedure. We create a new Promise that will retry the request, clone all the
         * request configuration from the failed request in the error object.
         */
        const retryOriginalRequest = new Promise((resolve, reject) => {
            /*
             * We need to add the request retry to the queue since there another request that already attempt to
             * refresh the token
             */
            addSubscriber(newToken => {
                if (newToken) {
                    errorResponse.config.headers.Authorization = 'Bearer ' + newToken;
                    resolve(instance(errorResponse.config));
                } else {
                    reject(error);
                }
            });
        });
        if (!isRefreshingAccessToken) {
            isRefreshingAccessToken = true;

            const body = queryString.stringify({
                'grant_type': 'refresh_token',
            });

        }
        return retryOriginalRequest;
    } catch (err) {
        return Promise.reject(err);
    }
};

const onRefreshTokenComplete = (newToken) => {
    // When the refresh is successful, we start retrying the requests one by one and empty the queue
    subscribers.forEach(callback => callback(newToken));
    subscribers = [];
};

const addSubscriber = (callback) => {
    subscribers.push(callback);
};

instance.interceptors.request.use(request => {
    const state = reduxStore.getState();
    const { data } = request
    // Edit request config
    // if (request.baseURL === globalVar.api.API_BASE_URL) {
    if (request && request.url) {
        const token = state.user.token != null ? state.user.token : null;
        request.headers.common['x-devicetype'] = 'SessionID';
        request.headers.common['x-lang'] = 'vi';

        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }

        if (request.method === 'post' && typeof request.data === 'string') {
            request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        return request;
    }
}, (error) => {
    // console.log(error);
    return Promise.reject(error);
});


instance.interceptors.response.use(
    (response) => {
        // Thrown error for request with OK status code
        const { data } = response;

        if (data.hasOwnProperty('status') && data['status'] == 500) {
            return Promise.reject(createError(data['status'], data['status'], data['message']));
        }
        return data && data.d;
    },
    async (error) => {
        const { response } = error;
        if (response == null) {
            return Promise.reject(error);
        }

        const { data } = response;
        if (isTokenExpiredError(response)) {
            await dispatch(actions.logout())
        }

        return Promise.reject(createError(response.status));
    }
);

export default instance;