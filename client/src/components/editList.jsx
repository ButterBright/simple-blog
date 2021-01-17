import Header from "./header"
import InfoList from "./infoList"
import GlobalStyle from "./globalStyle"
import styled from "styled-components"
import { Link } from "react-router-dom"

function EditList() {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Container>
                <Title>Articles</Title>
                <Link to="/edit">
                    <Button>write article</Button>
                </Link>
            </Container>
            <InfoList />
        </div>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right: 1rem;
`

const Button = styled.button`
    padding: 0.3rem 0.5rem;
    border: 1px solid black;
    background: white;
    &:hover {
        background-color: rgb(150, 150, 150);
        color: white;
    }
`

export default EditList
