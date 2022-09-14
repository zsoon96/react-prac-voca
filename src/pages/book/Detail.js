import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

const Detail = () => {

    const navigate = useNavigate()

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

    const deleteBook = () => {
        axios.delete('http://localhost:3000/board/' + id)
            .then((res) => {
                if (res.status === 200) {
                    navigate('/')
                } else {
                    alert('삭제에 실패하였습니다.')
                }
            })
    }

    return (
        <div>
            <h1> 책 상세보기 </h1>
            <Button variant="warning">수정</Button>
            <Button variant="danger" onClick={deleteBook}>삭제</Button>
            <hr />
            <h4>{book.author}</h4>
            <h1>{book.title}</h1>
            <h2>{book.content}</h2>
        </div>
    );
};

export default Detail;