import styled from "styled-components"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { logOut } from "../actions/user"
import { useDispatch } from "react-redux"

function Header() {
    const username = useSelector(state => state.user)?.user?.username
    const dispatch = useDispatch()
    function handleLogout() {
        logOut()(dispatch)
    }
    return (
        <Container>
            <Container2>
                <Title>ButterBright</Title>
                <SubTitle>
                    Just direct your feet on the sunny side of the street.
                </SubTitle>
            </Container2>
            <Container3>
                {!username ? (
                    <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div>login</div>
                    </Link>
                ) : (
                    <div onClick={handleLogout}>logout</div>
                )}
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <StyledFont>Home</StyledFont>
                </Link>
                {username === "Bright" && (
                    <Link
                        to="/editlist"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <StyledFont>EditCenter</StyledFont>
                    </Link>
                )}
            </Container3>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    height: 10%;
    display: flex;
    @media screen and (max-width: 959px) {
        flex-direction: column;
    }
`

const Container2 = styled.div`
    flex-direction: column;
    margin: auto;
`

const Container3 = styled.div`
    display: flex;
    margin: auto;
`

const Title = styled.div`
    font-family: "Major Mono Display", sans-serif;
    font-size: 30px;
    padding: 0.5rem 0;
    @media screen and (max-width: 959px) {
        text-align: center;
    }
`

const SubTitle = styled.div`
    font-family: "Major Mono Display", sans-serif;
    font-size: 15px;
    font-weight: bold;
    padding: 0.3rem 0;
`

const StyledFont = styled.div`
    margin-left: 2rem;
    cursor: pointer;
`

export default Header
