import { GLOBALTYPES } from '../actions/globalTypes'
import { PATH_NAME, FILTER_MOVIES } from './../../utils';

const initialState = {
    isInitialized: false,
    menuActive: PATH_NAME.HOME,
    listCategories: [],
    listCountries: [],
    listGenres: [],
    filterMovies: {
        ...FILTER_MOVIES
    },
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZATION_COMPLETE':
            return {
                ...state,
                isInitialized: true,
            };
        case "SET_MENU_ACTIVE":
            return {
                ...state,
                menuActive: action.data,
            };
        case "LOAD_DATA_CATEGORIES":
            return {
                ...state,
                listCategories: action.data
            };
        case "LOAD_DATA_COUNTRIES":
            return {
                ...state,
                listCountries: action.data
            };
        case "LOAD_DATA_GENRES":
            return {
                ...state,
                listGenres: action.data
            };
        case "UPDATE_DATA_FILTER_MOVIES":
            return {
                ...state,
                filterMovies: {
                    ...state.filterMovies,
                    ...action.data
                }
            };
        case "CLEAR_DATA_FILTER_MOVIES":
            return {
                ...state,
                filterMovies: FILTER_MOVIES
            };
        default:
            return state;
    }
}


export default authReducer