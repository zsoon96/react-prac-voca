import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../../actions/user_action";

const LoginForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

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

        dispatch(loginUser(body))
            .then((res) => {
                if (res.payload.loginSuccess) {
                    navigate('/')
                } else {
                    alert('로그인에 실패하였습니다.')
                }
            })
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