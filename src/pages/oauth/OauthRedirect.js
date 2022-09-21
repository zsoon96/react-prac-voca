import React, {useEffect} from 'react'

// 리다이렉트 될 화면
const OauthRedirect = () => {
    const code = new URL (window.location.href).searchParams.get('code')

    useEffect(() => {
        console.log(code)
    },[])

    return (
        <h4>잠시만 기다려 주세요! 로그인 중입니다.</h4>
    )
}

export default OauthRedirect