import GlobalStyle from "./components/globalStyle"
import PostList from "./components/postList"
import Header from "./components/header"
import Nav from "./components/nav"
import styled from "styled-components"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { post } from "./actions/post"

function App() {
    const dispatch = useDispatch()
    useEffect(() => post()(dispatch), [])
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Container>
                <Nav />
                <PostList />
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`

export default App
