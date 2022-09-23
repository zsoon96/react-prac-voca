import {KAKAO_LOGIN_USER, LOGIN_USER} from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER :
            return {...state, loginSuccess: action.payload}

        case KAKAO_LOGIN_USER :
            return {...state, loginSuccess: action.payload}

        default:
            return state
    }
}