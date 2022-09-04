import './App.css';
import {useState} from "react";

function App() {

    // 상태값 변경을 위해 React hook이라는 라이브러리에 useState() 사용
    // const [변수명, 변경값이 담긴 변수명] = useState(초기값)
    const [users, setUsers] = useState([{ id: 4, name: "장보고"}])

    const download= () => {
        let sample = [
            { id: 1, name: "홍길동" },
            { id: 2, name: "임꺽정" },
            { id: 3, name: "이순신" }
        ]
        // setUsers([...users, ...sample]) // 기존 데이터에 추가
        setUsers([...sample]) // 새로운 내용으로 교체 (덮어쓰기)
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
