import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../../actions/user_action";
import {REDIRECT_URI, REST_API_KEY} from "../../config/Oauth";
import {useCookies} from "react-cookie";

const LoginForm = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies(['token'])


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
                    // 쿠키에 토큰 저장
                    setCookie('token', res.payload.accessToken)
                    navigate('/')
                } else {
                    alert('로그인에 실패하였습니다.')
                }
            })
    }

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

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
            {/* 인가 코드 요청은 REST-API 방식이 아닌 href 방식으로 호출 */}
            {/* 1-카카오 로그인 btn 클릭 > kakao/oauth/authorize에 인가코드 요청 */}
            <Button href={KAKAO_AUTH_URL} variant="primary" type="submit">
                카카오 로그인
            </Button>
        </Form>
    );
};

export default LoginForm;