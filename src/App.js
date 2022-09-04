import './App.css';
import {createRef, useRef, useState} from "react";

function App() {

    // useRef는 dom을 변경할 때 사용
    const myRef = useRef(null)

    const [list, setList] =useState([
        { id: 1, name: "꺽정"},
        { id: 2, name: "길동"}
    ])

    // Array.from()을 사용하여 list의 길이만큼 배열 생성 후, createRef()로 list의 Ref 동적 생성
    const myRefs = Array.from({length: list.length}).map( ()=> createRef() )

    // 렌더링 시점은 상태값이 변할 때
    return (
        <div>
            <button onClick={ ()=>{
                // myRef.current.style.backgroundColor = 'blue';
                myRefs[0].current.style.backgroundColor = 'blue'
            } }>색 변경</button>
            <div ref={myRef}>박스</div>

            {list.map( (u, idx) => <h1 ref={myRefs[idx]}>{u.name}</h1> )}
        </div>
    );
}

export default App;
