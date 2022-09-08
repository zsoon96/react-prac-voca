import TopRedux from "./components/TopRedux";
import BottomRedux from "./components/BottomRedux";
import React, {useState} from "react";


function App() {

    const [num, setNum] = useState(0)

    // 숫자 증가함수
    const addNum = () => {
        setNum(num + 1)
    }

    return (
        // BrowserRouter로 모든 컴포넌트 감싸주기
        <div className='container'>
            <h1>Redux 적용 예제</h1>
            {/* 변수 props 전달 */}
            <TopRedux num = {num} />
            {/* 함수 props 전달 */}
            <BottomRedux addNum = {addNum}/>
        </div>
    );
}

export default App;
