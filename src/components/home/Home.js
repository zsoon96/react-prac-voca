import React from 'react';
import styled from 'styled-components'

// HomePage.js(부모)에서 넘겨준 props 받기(자식)
const Home = (props) => {
    // const boards = props.boards;

    // 구조분할 할당
    // props에 받은 boards, id 등을 바로 받을 수 있는 구문
    const {boards} = props; // 변수 받기
    const {setBoard} = props; // 함수 받기
    const {number, setNumber} = props;
    const {user} = props;

    // 부모로 부터 받아온 데이터의 스타일링을 동적으로 !
    const StyledDeleteButton = styled.button`
        color: ${ (props) => (props.user.name === 'soon' ? 'blue' : 'red')}
    `

    // 스타일 상속
    const StyledAddButton = styled(StyledDeleteButton)`
        // color: ${ (props) => (props.user.name === 'soon' ? 'blue' : 'red')}
        background-color: green;
    `

    return (
        <div>
            <h1>홈 : {number}</h1>
            <StyledAddButton user={user} onClick={ () => setNumber(number+1) }>숫자 증가</StyledAddButton>
            {/* 부모로 부터 (Hompage.js) 받은 props를 다시 스타일 컴포넌트(외부)에 넘겨줌 (HomePage.js > Home.js > StyledDeleteButton) */}
            <StyledDeleteButton user={user} onClick={() => setBoard([])}>삭제하기</StyledDeleteButton>
            {boards.map((board) =>
                <h3>
                    제목 : {board.title}, 내용 : {board.content}
                </h3>
            )}
        </div>
    );
};

export default Home;