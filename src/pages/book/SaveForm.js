import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const SaveForm = () => {

    const navigate = useNavigate()

    const [book, setBook] = useState({
        title: "",
        author: "",
        content: ""
    })

    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name] : e.target.value
        })
    }

    const submitBook = (e) => {
        e.preventDefault() // submit이 actions을 안타고 자기 할일을 그만함
        // const body = {
        //     title: book.title,
        //     author: book.author,
        //     content: book.content
        // }
        axios.post('http://localhost:3000/board', book)
            .then((res) => {
                if ( res.status === 201) {
                    navigate("/")
                } else {
                    alert("책 등록에 실패하였습니다!")
                }
            })
    }

    return (
        <Form onSubmit={submitBook}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" onChange={changeValue} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter author" onChange={changeValue} name="author" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" placeholder="Enter content" onChange={changeValue} name="content" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default SaveForm;