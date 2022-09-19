import React, {useEffect} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function (SpecificComponent,option) {
    // option
    // null > 아무나 접근 가능
    // true > 로그인 한 사람만 접근 가능
    // false > 로그인 한 사람은 접근 불가능

    function AuthenticationCheck() {
        const navigate = useNavigate()

        useEffect(() => {
            axios.get('http://localhost:3000/auth/check')
                .then((res) => {
                    console.log(res.data)
                    // 로그인 하지 않은 상태에서 option값이 true 페이지 접근시
                    if (!res.data) {
                      if (option) {
                          navigate('/login')
                      }
                    } else {
                        // 로그인 한 상태에서 option값이 false 페이지 접근시
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