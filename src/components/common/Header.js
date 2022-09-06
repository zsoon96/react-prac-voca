import styled from 'styled-components'
import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

// 재사용을 위한 하나의 컴포넌트 생성

// styled-components => js 파일과 css 파일 한번에 관리
const StyledHeaderDiv = styled.div`
    border: 1px solid black;
    height: 300px;
`

// 일반적인 방법으로 스타일 적용이 안되는 경우, 아래와 같이 상속해서 사용하기!
const StyledHeadLink = styled(Link)`
    color: red;
`

const Header = () => {
    return (
        <>
            <StyledHeaderDiv>
                <ul>
                    <li>
                        {/* 해당 글자 클릭 시, 헤더 외 내용 부분만 변경 == 필요한 부분만 다시 불러옴 */}
                        {/* 그와 반면 a태그를 사용하게 될 경우, 전체 페이지를 새로고침해서 불러오기 때문에 X (SPA이기 때문) */}
                        <StyledHeadLink to="/">홈</StyledHeadLink>
                    </li>
                    <li>
                        <Link to="/login/2">로그인</Link>
                    </li>
                </ul>
            </StyledHeaderDiv>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='nav-bar'>Home</Link>
                            {/* 아래와 같이 href로 페이지 연결하면 전체 다시 렌더링(새로고침)해야하기 때문에 위와같이 Link to로 변경 */}
                            {/* css 적용시, className은 w3school 참고 */}
                            {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;