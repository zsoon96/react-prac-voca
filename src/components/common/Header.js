import styled from 'styled-components'
import {Link} from "react-router-dom";

// 재사용을 위한 하나의 컴포넌트 생성

// styled-components => js 파일과 css 파일 한번에 관리
const StyledHeaderDiv = styled.div`
    border: 1px solid black;
    height: 300px;
`

const Header = () => {
    return (
        <StyledHeaderDiv>
            <ul>
                <li>
                    {/* 해당 글자 클릭 시, 헤더 외 내용 부분만 변경 == 필요한 부분만 다시 불러옴 */}
                    {/* 그와 반면 a태그를 사용하게 될 경우, 전체 페이지를 새로고침해서 불러오기 때문에 사용 비추천 */}
                    <Link to = "/">홈</Link>
                </li>
                <li>
                    <Link to = "/login">로그인</Link>
                </li>
            </ul>
        </StyledHeaderDiv>
    )
}

export default Header;