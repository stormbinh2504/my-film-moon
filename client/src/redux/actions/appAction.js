import { GLOBALTYPES } from './globalTypes'
import { postDataAPI } from '../../utils/fetchData'
import { Link, useHistory } from 'react-router-dom'
// import { browserHistory } from 'react-router'
import { push } from "connected-react-router";
import { movieService } from '../../services';
import { ToastUtil } from '../../utils';
import { batch } from 'react-redux';

// const history = useHistory()

export const setMenuActive = (pathName) => {
    return (dispatch, getState) => {
        dispatch({
            type: "SET_MENU_ACTIVE",
            data: pathName
        })
        dispatch(push(pathName));
    }
}


export const initializeApp = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const haveSavedSession = state.user.token != null;

        batch(async () => {
            await dispatch(loadDataCategories())
            await dispatch(loadDataCountries())
            await dispatch(loadDataGenres())
            await dispatch({ type: 'INITIALIZATION_COMPLETE' });
        })


        // Lưu lại thông tin token nếu localStorage rỗng
        let usersTokens = JSON.parse(localStorage.getItem('token-users'));
        if (haveSavedSession && !usersTokens) {
            // dispatch(authorizationSuccess(state.user.token));
        }


        if (!haveSavedSession) {
            return
        }
        batch(() => {
            if (haveSavedSession) {
                dispatch(fetchUserInfoFromSavedSession());
            }
        })

    }
};


export const fetchUserInfoFromSavedSession = () => {
    return (dispatch, getState) => {
        // accountService.getRequiredData()
        //     .then((responses) => {
        //         const [userInfo] = responses;
        //         batch(() => {
        //             console.log("binh_check_setUserInfo", userInfo, responses)
        //             dispatch(setUserInfo(userInfo))
        //         })
        //     })
        //     .catch((error) => {
        //         // dispatch(loginFail(error));
        //     });
    };
}



export const loadDataCountries = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await movieService.getCountries()
            .then((res) => {
                if (res && res.length > 0) {
                    dispatch({
                        type: "LOAD_DATA_COUNTRIES",
                        data: res
                    })
                }
            })
            .catch((error) => {
                ToastUtil.errorApi(error)
            });
    };
};

export const loadDataGenres = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await movieService.getGenres()
            .then((res) => {
                if (res && res.length > 0) {
                    dispatch({
                        type: "LOAD_DATA_GENRES",
                        data: res
                    })
                }
            })
            .catch((error) => {
                ToastUtil.errorApi(error)
            });
    };
};

export const loadDataCategories = () => {
    return async (dispatch, getState) => {
        const state = getState();
        await movieService.getCategories()
            .then((res) => {
                if (res && res.length > 0) {
                    dispatch({
                        type: "LOAD_DATA_CATEGORIES",
                        data: res
                    })
                }
            })
            .catch((error) => {
                ToastUtil.errorApi(error)
            });
    };
};