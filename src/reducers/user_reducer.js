import {AUTH_USER, KAKAO_LOGIN_USER, LOGIN_USER} from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER :
            return {...state, loginSuccess: action.payload}

        case KAKAO_LOGIN_USER :
            return {...state, loginSuccess: action.payload}

        case AUTH_USER :
            console.log(action.payload)
            return {...state, userData: action.payload}

        default:
            return state
    }
}