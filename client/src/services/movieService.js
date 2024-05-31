import axios from '../axios';
import * as queryString from 'query-string';
const globalVar = window._env_

// let BASE_URL_API = process.env.REACT_APP_PAYPAL_CLIENT_ID
const REACT_APP_BASE_URL_API = globalVar.api.REACT_APP_BASE_URL_API;

const movieService = {

    createMovie(body) {
        return axios.post(`${REACT_APP_BASE_URL_API}movies/create`, body)
    },

    getMovies(body) {
        return axios.get(`${REACT_APP_BASE_URL_API}movies/get-movies`)
    },

    getCountries() { //Lấy danh sách quốc gia
        return axios.get(`${REACT_APP_BASE_URL_API}movies/get-countries`)
    },

    getGenres() { //Lấy danh sách thể loại phim
        return axios.get(`${REACT_APP_BASE_URL_API}movies/get-genres`)
    },

    getCategories() { //Lấy danh sách loại phim
        return axios.get(`${REACT_APP_BASE_URL_API}movies/get-categories`)
    },
}
export default movieService