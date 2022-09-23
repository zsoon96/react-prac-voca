import React, {useEffect} from 'react'
import axios from "axios";
import {loginUserKakao} from "../../actions/user_action";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

// 리다이렉트 될 화면
const OauthRedirect = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const code = new URL (window.location.href).searchParams.get('code')

    useEffect(() => {
        const data = axios.get(`http://localhost:3001/auth/kakao?code=${code}`)
            .then((res) => {
                return res.data
            })

        dispatch(loginUserKakao(data))
            .then((res) => {
                console.log(res)
                if (res.payload.loginSuccess) {
                    navigate('/')
                } else {
                    alert('로그인에 실패하였습니다.')
                }
            })
    },[])

    return (
        <h4>잠시만 기다려 주세요! 로그인 중입니다.</h4>
    )
}

export default OauthRedirect