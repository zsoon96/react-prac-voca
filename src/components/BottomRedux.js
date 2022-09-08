import React from 'react';
import '../App.css'

const BottomRedux = (props) => {

    const { addNum } = props

    return (
        <div className='sub_container'>
            <h2>bottom</h2>
            <button onClick={addNum}>증가</button>
        </div>
    );
};

export default BottomRedux;