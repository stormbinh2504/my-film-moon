import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./ToolPhoneZaloChat.scss"

const ToolPhoneZaloChat = ({ children }) => {

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='tool-phone-zalo-chat'>
            <div class='phonering-alo-phone'>
                <div class="phonering-alo-ph-circle-fill"></div>
                <a rel="nofollow" target="_blank" href="tel:0833855955" class="alo-ph-img-circle img-phonering"></a>
            </div>
            <div class="zaloring-alo-phone">
                <div class="phonering-alo-ph-circle-fill"></div>
                <a rel="nofollow" target="_blank" href="https://zalo.me/0833855955" class="alo-ph-img-circle img-zaloring"></a>
            </div>
            <div class="mess-facebook">
                <a rel="nofollow" target="_blank" href="https://zalo.me/0833855955" class="fb-btn"></a>
            </div>
            <div class="youtube-recomend">
                <a rel="nofollow" target="_blank" href="https://www.youtube.com/" class="youtube-btn"></a>
            </div>
        </div >
    )
}

export default ToolPhoneZaloChat