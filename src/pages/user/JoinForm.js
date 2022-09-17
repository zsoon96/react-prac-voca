import React, {useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const JoinForm = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        nickname: "",
        birth: "",
        phone: ""
    })

    const changeValue = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const submitUser = (e) => {
        e.preventDefault()
        const body = {
            email: user.email,
            password: user.password,
            username: user.username,
            nickname: user.nickname,
            birth: user.birth,
            phone: user.phone
        }
        axios.post('http://localhost:3000/auth/signup', body )
            .then((res) => {
                if ( res.status === 201 ) {
                    navigate('/login')
                } else {
                    alert('회원가입에 실패하였습니다.')
                }
            })
            .catch(e => alert(e.response.data.message))
    }

    return (
        <Form onSubmit={submitUser}>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email@email.com" name="email" onChange={changeValue}/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" name="password" onChange={changeValue}/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="username" name="username" onChange={changeValue}/>
                </Form.Group>

                {/*<Form.Group as={Col} controlId="formGridState">*/}
                {/*    <Form.Label>State</Form.Label>*/}
                {/*    <Form.Select defaultValue="Choose...">*/}
                {/*        <option>Choose...</option>*/}
                {/*        <option>...</option>*/}
                {/*    </Form.Select>*/}
                {/*</Form.Group>*/}

                <Form.Group as={Col}>
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control placeholder="nickname" name="nickname" onChange={changeValue}/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Birth</Form.Label>
                    <Form.Control placeholder="2000.01.10" name="birth" onChange={changeValue}/>
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder="010-2345-6789" name="phone" onChange={changeValue}/>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                회원가입
            </Button>
        </Form>
    );
};

export default JoinForm;