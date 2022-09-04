import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState(0)

    const download = () => {
        let download = 5;
        setData(download)
    }

    // useEffect()의 실행시점
    // 1- App() 함수가 최초 실행될 때 (첫 그림이 그려질 때)
    // 2- 상태 변수가 변경될 때 + 의존 리스트 관리 가능
    useEffect( () => {
       console.log("useEffect 실행")
        download(); // +1 되자마자 5가 됨 ( 최초 실행에 따른 useEffect 실행 > download 함수 실행으로 화면에 그려지는 값은 5 > 더하기 버튼 클릭 시 +1 (6) > 상태 변경에 따른 useEffect 실행 > download 함수 실행으로 화면에 그려지는 값은 5 )
    }, []) // useEffect 두번째 인자(의존성)로 빈 배열을 넣어주면 최초 실행 후부터는 무시(useEffect 실행 x)
                // 즉, 빈 배열에 의존할 변수를 적게되면 해당 변수의 상태가 변경될 시, useEffect를 실행한다는 의미 (의존 리스트 관리 가능)

    // 렌더링 시점은 상태값이 변할 때
    return (
        <div>
            <h1>데이터 : {data}</h1>
            <button onClick={ ()=>{setData(data+1)} }>더하기</button>
        </div>
    );
}

export default App;
