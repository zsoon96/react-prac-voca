import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {logoutUser} from "../actions/user_action";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {

        dispatch(logoutUser())
            .then((res) => {
                if ( res.payload.isAuth === false ) {
                    navigate('/login')
                }
            })
        // axios.post('http://localhost:3001/auth/logout')
        //     .then((res) => {
        //         const { accessToken } = res.data
        //         // API 요청할 때마다 헤더에 accessToken 담아 보내도록 설정 -> localStorage, cookie 등에 저장하지 않결
        //         axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        //         navigate('/login')
        //     })
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/" className = "navbar-brand">홈</Link>
                    <Nav className="me-auto">
                        <Link to="/save" className = "navbar-link">글작성</Link>
                        <Link to="/join" className = "navbar-link">회원가입</Link>
                        <Link to="/login" className = "navbar-link">로그인</Link>
                        <button onClick={logoutHandler}>로그아웃</button>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    )
};

export default Header;