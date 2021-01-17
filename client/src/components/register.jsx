import { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"
import ImageUploader from "react-images-upload"
import FileBase from "react-file-base64"

function Register() {
    const history = useHistory()
    async function handleSubmit(username, password, img) {
        console.log(img)
        try {
            await axios.post("http://localhost:5000/users/register", {
                username: username,
                password: password,
                img: img,
            })
            alert("register successfully, please login")
            history.push("/login")
        } catch (err) {
            console.log(err.message)
        }
    }
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [img, setImg] = useState("")
    return (
        <Container>
            <Title>Register</Title>
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
            {/* <FileBase mutiple={false} onDone={files => setImg({files: files})} /> */}
            <Container2>
                <FileBase
                    type="file"
                    mutiple={false}
                    onDone={({ base64 }) => setImg(base64)}
                />
            </Container2>
            <Button onClick={() => handleSubmit(username, password, img)}>
                Submit
            </Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
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

const Container2 = styled.div`
    margin-top: 1rem;
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

export default Register
