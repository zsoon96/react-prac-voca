// 액션 함수
export const increaseNum = () => ( {type: "INCREASE_NUM"} )
export const decreaseNum = () => ( {type: "DECREASE_NUM"} )

// 초기 상태
const initState = { num : 0 }

// 액션의 결과를 걸러 상태 변화해서 store에 반영하는 역할
const reducer = (state=initState, action) => {
    switch (action.type) {
        case "INCREASE_NUM":
            return { num : state.num + 1} // return 되면 그걸 호출한 쪽에서 받는게 아니라 return 되는 순간 ui 변경

        case "DECREASE_NUM":
            return { num: state.num -1 }
        default:
            return state;
    }
}

export default reducer;