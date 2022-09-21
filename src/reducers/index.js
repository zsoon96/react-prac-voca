import { combineReducers } from "redux";
import user from './user_reducer'

// 각 기능에 따른 리듀서들을 하나로 묶는 역할
const rootReducer = combineReducers({
    user,
})

export default rootReducer