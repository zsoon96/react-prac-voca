import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const [book, setBook] = useState({
        id: "",
        title: "",
        author: "",
        content: ""
    })

    // url의 id 값을 받아와서
    const { id } = useParams()

    // 해당 id에 맞는 정보 조회
    useEffect(() => {
        axios.get('http://localhost:3000/board/' + id).
            then((res) => {
                // res.data 객체로 바로 상태변화
                setBook(res.data)
        })
    })

    return (
        <div>
            <h1> 책 상세보기 </h1>
            <hr />
            <h4>{book.author}</h4>
            <h1>{book.title}</h1>
            <h2>{book.content}</h2>
        </div>
    );
};

export default Detail;