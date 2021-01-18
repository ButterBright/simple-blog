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
            <Title>ButterBright</Title>
            <Container2>
                <SubTitle>
                    Just direct your feet on the sunny side of the street.
                </SubTitle>
                {!username ? (
                    <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <StyledFont>login</StyledFont>
                    </Link>
                ) : (
                    <StyledFont onClick={handleLogout}>logout</StyledFont>
                )}
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <StyledFont>Home</StyledFont>
                </Link>
                {username === "Bright" && (
                    <Link
                        to="/editlist"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div>Edit Center</div>
                    </Link>
                )}
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
    cursor: pointer;
`

export default Header
