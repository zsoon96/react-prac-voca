import TopRedux from "./components/TopRedux";
import BottomRedux from "./components/BottomRedux";
import React, {useState} from "react";


function App() {
    return (
        <div className='container'>
            <h1>Redux 적용 예제</h1>
            <TopRedux />
            <BottomRedux />
        </div>
    );
}

export default App;
