import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const navigate = useNavigate()

    const logoutHandler = () => {
        axios.post('http://localhost:3000/auth/logout')
            .then((res) => {
                alert('로그아웃 성공')
                navigate('/login')
            })
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