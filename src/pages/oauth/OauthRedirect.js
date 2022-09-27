import React, {useEffect} from 'react'
import axios from "axios";
import {loginUserKakao} from "../../actions/user_action";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

// 리다이렉트 될 화면 (인가코드 받음) / 로그인 처리 진행시 보여질 화면
const OauthRedirect = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['token'])

    const code = new URL (window.location.href).searchParams.get('code')

    useEffect(() => {
        // 2- 카카오로부터 받은 인가 코드를 서버 /auth/kakao로 전달
        axios.get(`http://localhost:3001/auth/kakao?code=${code}`)
            .then((res) => {
                return res.data
            })
            // 3- 서버에서 응답값으로 사용자의 정보를 반환해줌 > 해당 정보를 가지고 dispatch 액션함수 실행
            .then((res) => {
                dispatch(loginUserKakao(res))
                    .then((res) => {
                        if (res.payload.loginSuccess) {
                            // 쿠키에 토큰 저장
                            setCookie('token', res.payload.accessToken)
                            console.log(cookies.token)
                            navigate('/')
                        } else {
                            alert('로그인에 실패하였습니다.')
                        }
                    })
                }

            )
    },[])

    return (
        <h4>잠시만 기다려 주세요! 로그인 중입니다.</h4>
    )
}

export default OauthRedirect