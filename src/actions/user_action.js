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
    axios.defaults.headers.common['Authorization'] = `Bearer ${dataToSubmit.accessToken}`

    return {
        type: "KAKAO_LOGIN_USER",
        payload: dataToSubmit
    }
}