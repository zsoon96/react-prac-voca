import './App.css';

// 변수 선언은 let(변수) 또는 const(상수)만 사용 (var x)
let a = 10;
const b = 20;

function App() {
    return (
        // 리액트는 하나의 태그만 리턴함
        <div>
            {/* if문 사용 불가 > 삼항연산자만 가능 */}
            <h1>JSX 문법 {a === 10 ? "true" : "false"} </h1>

            {/* 조건부 렌더링 (20이면(true) string값이 나오고, 아니면(false) 표시 x) */}
            <h2>h1 태그 {b === 20 && '20입니다.'} </h2>
            <hr/>
            {/* 스타일은 외부파일(App.css) 또는 라이브러리(component-style, bootstrap 등)를 사용하는 걸 권장*/}
            <h3 className="font-style"> 스타일 입히기 </h3>
        </div>
    );
}

export default App;
