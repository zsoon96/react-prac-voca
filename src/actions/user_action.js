import axios from "axios";

export function loginUser(dataToSubmit) {
    const request = axios.post('http://localhost:3001/auth/login', dataToSubmit)
        .then((res) => {
            // API 요청할 때마다 헤더에 accessToken 담아 보내도록 설정 -> localStorage, cookie 등에 저장하지 않결
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`
            return res.data
        })
        .catch( e => alert(e.response.data.message))

    return {
        type: "LOGIN_USER",
        payload: request
    }
}

export function loginUserKakao(dataToSubmit) {

    // 4- 해당 정보를 다시 서버 /auth/kakao/login으로 로그인 요청 > 로그인 처리 후, 해당 응답값 반환 > 리듀서에 전달해서 상태 변환
    const request = axios.post('http://localhost:3001/auth/kakao/login', dataToSubmit)
        .then((res) => {

            // API 요청할 때마다 헤더에 accessToken 담아 보내도록 설정 -> localStorage, cookie 등에 저장하지 않결
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`
            return res.data
        })
        .catch( e => alert(e.response.data.message))

    return {
        type: "KAKAO_LOGIN_USER",
        payload: request
    }
}

export function authCheck() {
    const request = axios.get('http://localhost:3001/auth/check')
        .then((res) => {
            return res.data
        })

    return {
        type: "AUTH_USER",
        payload: request
    }
}

export function logoutUser() {
    const request = axios.post('http://localhost:3001/auth/logout')
        .then((res) => {
            return res.data
        })
        .catch( e => alert(e.response.data.message))

    return {
        type: "AUTH_USER",
        payload: request
    }
}