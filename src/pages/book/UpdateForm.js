import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

const UpdateForm = () => {

    const navigate = useNavigate()

    const [book, setBook] = useState({
        title: "",
        author: "",
        content: ""
    })

    const { id } = useParams()

    // 기존데이터 받아오기
    useEffect(() => {
        axios.get('http://localhost:3001/board/' + id).
        then((res) => {
            // res.data 객체로 바로 상태변화
            setBook(res.data)
        })
    },[])

    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name] : e.target.value
        })
    }

    const submitBook = (e) => {
        e.preventDefault() // submit이 actions을 안타고 자기 할일을 그만함
        axios.put('http://localhost:3001/board/' + id, book)
            .then((res) => {
                console.log(res.data)
                if ( res.status === 200) {
                    navigate("/book/" + id)
                } else {
                    alert("책 수정에 실패하였습니다!")
                }
            })
    }


    return (
        <Form onSubmit={submitBook}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={changeValue} name="title" value={book.title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter author" onChange={changeValue} name="author" value={book.author}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" placeholder="Enter content" onChange={changeValue} name="content" value={book.content} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Edit
            </Button>
        </Form>
    );
};

export default UpdateForm;