import './App.css';
import {useMemo, useState} from "react";

function App() {

    const [list, setList] = useState([1,2,3,4])
    const [str, setStr] = useState("합계")

    const getAddResult = () => {
        let sum = 0;
        list.forEach( (i)=> ( sum = sum + i ) )
        console.log("sum 함수 실행 : " + sum)
        return sum
    }

    // 함수를 기억하는 hooks 라이브러리
    // 첫 번째 인자로는 기억할 함수, 두 번째 인자로는 언제만 실행되게 할건지 (dependency)
    const addResult = useMemo( ()=> getAddResult(), [list])

    // 렌더링 시점은 상태값이 변할 때
    return (
        <div>
            <button onClick={ () => { setList([...list, 10]) }}> 리스트 값 추가 </button>
            {/* 문자 변경 버튼을 눌러도 sum 함수가 실행됨 => str의 상태가 변하기 때문에 다시 렌더링되면서 getAddResult() 실행 */}
            <button onClick={ () => {setStr("안녕")} }> 문자 변경 </button>

            <div>
                {list.map( (i)=> (
                    <h1>{i}</h1>
                ))}
            </div>
            {/*<div>{str} : {getAddResult()} </div>*/}
            {/* useMemo()를 사용하면 문자 변경 버튼 눌렀을 때, sum 함수 실행 x (== 리스트 값 추가할 때만 getAddResult() 실행) */}
            <div>{str} : {addResult} </div>
        </div>
    );
}

export default App;
