import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const LoginForm = () => {

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
        console.log('로그인 정보 입력 성공')
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