import styled from 'styled-components'

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