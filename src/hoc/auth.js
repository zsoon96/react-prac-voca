import React, {useEffect} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authCheck} from "../actions/user_action";
import {useCookies} from "react-cookie";

export default function (SpecificComponent,option) {
    // option
    // null > 아무나 접근 가능
    // true > 로그인 한 사람만 접근 가능
    // false > 로그인 한 사람은 접근 불가능

    function AuthenticationCheck() {
        const navigate = useNavigate()
        const dispatch = useDispatch()
        const [cookies, setCookie] = useCookies(['token'])

        useEffect(() => {
            const token = cookies.token; // 쿠키에서 id 를 꺼내기
            // token이 body로 요청이 가지 않아서 헤더에 토큰 설정 후, 데이터 전달
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            // console.log(token)

            // axios.get('http://localhost:3001/auth/check')
            //     .then((res) => {
            //         // 로그인 하지 않은 상태에서 option값이 true 페이지 접근시
            //         if (!res.data) {
            //           if (option) {
            //               navigate('/login')
            //           }
            //         } else {
            //             // 로그인 한 상태에서 option값이 false 페이지 접근시
            //             if (option === false) {
            //                 navigate('/')
            //             }
            //         }
            //     })

            dispatch(authCheck())
                .then((res) => {
                    console.log(res.payload)
                    if (!res.payload) {
                        if (option) {
                            navigate('/login')
                        }
                    } else {
                        if (option === false) {
                            navigate('/')
                        }
                    }
                })
        },[])

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}