import './App.css';
import styled from 'styled-components';

function App() {

    const style = {
        backgroundColor: 'red'
    }

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: violet;
    `;

    // 렌더링 시점은 상태값이 변할 때
    return (
        <div>
            {/* 스타일 적용 방법 1 - 비추 */}
            <div style={style}>파일 '내부'에서 작성</div>법

            {/* 스타일 적용 방법 2 */}
            <div className={"box_style"}>파일 '외부'에서 작성</div>

            {/* 스타일 적용 방법 3 */}
            <Title> 라이브러리를 통해 작성 </Title>
        </div>
    );
}

export default App;
