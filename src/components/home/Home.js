import React from 'react';

// HomePage.js(부모)에서 넘겨준 props 받기(자식)
const Home = (props) => {
    // const boards = props.boards;

    // 구조분할 할당
    // props에 받은 boards, id 등을 바로 받을 수 있는 구문
    const {boards} = props; // 변수 받기
    const {setBoard} = props; // 함수 받기
    const {number, setNumber} = props;

    return (
        <div>
            <h1>홈 : {number}</h1>
            <button onClick={ () => setNumber(number+1) }>숫자 증가</button>
            <button onClick={() => setBoard([])}>삭제하기</button>
            {boards.map((board) =>
                <h3>
                    제목 : {board.title}, 내용 : {board.content}
                </h3>
            )}
        </div>
    );
};

export default Home;