import { GLOBALTYPES } from '../actions/globalTypes'
import { PATH_NAME } from './../../utils';

const initialState = {
    menuActive: PATH_NAME.HOME,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MENU_ACTIVE":
            return {
                ...state,
                menuActive: action.data,
            };
        default:
            return state;
    }
}


export default authReducer