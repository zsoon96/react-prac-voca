import './App.css';
import {useState} from "react";

function App() {
    // 상태값 변경을 위해 React hook이라는 라이브러리에 useState() 사용
    // const [변수명, 변경값이 담긴 변수명] = useState(초기값)
    const [number, setNumber] = useState(1)

    const addNum= () => {
        // btn 클릭 시, 상태 변경
        setNumber(number+1)
    }

    // 렌더링 시점은 상태값이 변할 때
    return (
        <div>
           <h1>숫자 : {number}</h1>
           <button onClick={addNum}>더하기</button>
        </div>
    );
}

export default App;
