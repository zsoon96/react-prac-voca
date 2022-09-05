import React, {useEffect, useState} from 'react';
import Header from "../components/common/Header";
import Home from "../components/home/Home";
import Footer from "../components/common/Footer";

const HomePage = () => {

    // http 요청 방법 (fetch)
    const [boards, setBoard] = useState([]);
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState({});

    // 빈 배열 한번만 실행
    useEffect( () => {
        // 다운로드 가정
        let data = [
            { id:1, title: "제목1", content: "내용1"},
            { id:2, title: "제목2", content: "내용2"},
            { id:3, title: "제목3", content: "내용3"}
        ]

        setBoard([...data])
        setUser( {id: 1, name: 'soon'})
    }, [])

    // 컴포넌트 재사용성을 위해 page에서 상태변화
    return (
        <div>
            <Header />
            {/* props로 변수와 동작을 제어하는 함수 전달 (여러개 넘기는 거 가능) */}
            <Home boards = {boards} setBoard = {setBoard} number = {number} setNumber = {setNumber} user = {user} />
            <Footer />
        </div>
    );
};

export default HomePage;