import React from 'react';
import '../App.css'

const TopRedux = (props) => {

    const {num} = props

    return (
        <div className="sub_container">
            <h2>Top</h2>
            번호 : {num}
        </div>
    );
};

export default TopRedux;