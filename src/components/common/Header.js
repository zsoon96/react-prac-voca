import styled from 'styled-components'

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
                <li>메뉴 1</li>
                <li>메뉴 2</li>
            </ul>
        </StyledHeaderDiv>
    )
}

export default Header;