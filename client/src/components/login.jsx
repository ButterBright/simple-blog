import { useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import auth from "../actions/user"

function Login() {
    const history = useHistory()
    const dispatch = useDispatch()
    function handleSubmit(username, password, history) {
        auth(username, password, history)(dispatch)
    }
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <Container>
            <Title>Login</Title>
            <Input
                onChange={e => setUsername(e.target.value)}
                placeholder="username"
                type="text"
            ></Input>
            <Input
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
                type="password"
            ></Input>
            <Button onClick={() => handleSubmit(username, password, history)}>
                Submit
            </Button>
        </Container>
    )
}

const Container = styled.div`
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    align-items: center;
`

const Title = styled.div`
    font-family: "Major Mono Display";
    font-weight: bold;
    font-size: 30px;
`

const Input = styled.input`
    width: 23%;
    padding: 0.7rem 0;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border: none;
    font-size: 1rem;
`
const Button = styled.button`
    padding: 0.5rem 0.7rem;
    margin-top: 1rem;
    border: 1px solid black;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    background: white;
    &:hover {
        background-color: rgb(150, 150, 150);
        color: white;
    }
`

export default Login
