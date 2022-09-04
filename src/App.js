import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState(0)

    // useEffect()의 실행시점
    // 1- App() 함수가 최초 실행될 때 (첫 그림이 그려질 때)
    useEffect( () => {
       console.log("useEffect 실행")
    })
    // 렌더링 시점은 상태값이 변할 때
    return (
        <div>
            <h1>데이터 : {data}</h1>
            <button onClick={ ()=>{setData(data+1)} }>더하기</button>
        </div>
    );
}

export default App;
