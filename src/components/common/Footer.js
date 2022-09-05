import styled from 'styled-components'

const StyledFooterDiv = styled.div`
    border: 1px solid black;
    height: 300px;
`

const Footer = () => {
    return (
        <StyledFooterDiv>
            <ul>
                <li>오시는 길</li>
                <li>전화번호</li>
            </ul>
        </StyledFooterDiv>
    )
}

export default Footer;