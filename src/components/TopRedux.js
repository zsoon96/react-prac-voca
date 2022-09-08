import React from 'react';
import '../App.css'
import {useSelector} from "react-redux";

const TopRedux = () => {

    // 스토어에 저장된 데이터 가져오기
    const { num, username } = useSelector((store) => store)


    return (
        <div className="sub_container">
            <h2>Top</h2>
            번호 : { num }
            이름 : { username }
        </div>
    );
};

export default TopRedux;