import './App.css';
import {useState} from "react";

function App() {

    console.log("앱 최초 실행!")

    let sample = [
        { id: 1, name: "홍길동" },
        { id: 2, name: "임꺽정" },
        { id: 3, name: "이순신" }
    ]

    const [users, setUsers] = useState(sample) // 데이터뿐만 아니라 레퍼런스가 같기때문에 최초 1번만 렌더링됨!

    const download= () => {
        // setUsers(sample) // 데이터 추가 반영 안됨
        setUsers([...sample,{id: 4, name: "장보고"} ]) // 데이터 추가 반영 됨 !
    }

    // 렌더링 시점은 상태값이 변할 때
    return (
        <div>
           <button onClick={download}>다운로드</button>
            {/* map 함수로 배열의 내용 뿌려주기 */}
            {users.map( u => <h2>{u.id}. {u.name}</h2>)}
        </div>
    );
}

export default App;
