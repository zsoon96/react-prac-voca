import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeEmail = (e) => {
        setEmail(e.currentTarget.value);
    }
    const changePassword = (e) => {
        setPassword(e.currentTarget.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        const body = {
            email: email,
            password: password
        }
        axios.post('http://localhost:3000/auth/login', body)
            .then((res) => {
                const { accessToken } = res.data
                // API 요청할 때마다 헤더에 accessToken 담아 보내도록 설정 -> localStorage, cookie 등에 저장하지 않기
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                navigate('/')
            })
            .catch( e => alert(e.response.data.message))
    }


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={changeEmail}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={changePassword}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={loginHandler}>
                로그인
            </Button>
        </Form>
    );
};

export default LoginForm;