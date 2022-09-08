import React from 'react';
import '../App.css'
import {useDispatch} from "react-redux";
import {decreaseNum, increaseNum} from "../store";

const BottomRedux = () => {

    // 액션함수 실행을 위해
    const dispatch = useDispatch()

    return (
        <div className='sub_container'>
            <h2>bottom</h2>
            {/* 클릭 이벤트가 발생하면 해당 액션함수 실행 */}
            <button onClick={ () => dispatch(increaseNum("up"))}>증가</button>
            <button onClick={ () => dispatch(decreaseNum("down"))}>감소</button>
        </div>
    );
};

export default BottomRedux;