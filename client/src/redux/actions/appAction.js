import { GLOBALTYPES } from './globalTypes'
import { postDataAPI } from '../../utils/fetchData'
import { Link, useHistory } from 'react-router-dom'
// import { browserHistory } from 'react-router'
import { push } from "connected-react-router";
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
