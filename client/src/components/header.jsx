import styled from "styled-components"
import { Link } from "react-router-dom"

function Header() {
    return (
        <Container>
            <Title>ButterBright</Title>
            <Container2>
                <SubTitle>
                    Just direct your feet on the sunny side of the street.
                </SubTitle>
                <Link to="/" style={{textDecoration: "none", color: "black"}}>
                    <StyledFont>Home</StyledFont>
                </Link>
                <Link to="/editlist" style={{textDecoration: "none", color: "black"}}>
                    <div>Edit Center</div>
                </Link>
            </Container2>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    height: 10%;
`

const Container2 = styled.div`
    display: flex;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        /* max-width: 90%; */
        text-align: center;
    }
`

const Title = styled.div`
    font-family: "Major Mono Display", sans-serif;
    font-size: 30px;
    padding: 0.5rem 17%;
    @media screen and (max-width: 1024px) {
        text-align: center;
    }
`

const SubTitle = styled.div`
    font-family: "Major Mono Display", sans-serif;
    font-size: 15px;
    font-weight: bold;
    padding: 0.3rem 17%;
`

const StyledFont = styled.div`
    margin-right: 2rem;
`

export default Header
