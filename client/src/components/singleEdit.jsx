import styled from "styled-components"
import GlobalStyle from "./globalStyle"
import axios from "axios"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Header from "./header"

function SingleEdit() {
    const posts = useSelector(state => state.post)
    const { id } = useParams()
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const history = useHistory()
    if (!posts.posts) return <div></div>
    const post = posts.posts.filter(
        post => post._id === id.slice(1, id.length)
    )[0]
    async function handleSubmit(title, content) {
        if (title == "" || content == "") return
        try {
            await axios.put(`http://localhost:5000/posts/${id.slice(1, id.length)}`, {
                title: title,
                content: content,
            })
            history.push("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Container>
                <StyledHeader>Update aritcles</StyledHeader>
                <Input
                    defaultValue={post.title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="please add title here"
                ></Input>
                <br />
                <Textarea
                    defaultValue={post.content}
                    onChange={e => setContent(e.target.value)}
                ></Textarea>
                <br />
                <Button
                    onClick={() =>
                        handleSubmit(title, content)
                    }
                >
                    Submit
                </Button>
            </Container>
        </div>
    )
}

const Container = styled.div`
    text-align: center;
    padding: 2rem 2rem;
`

const StyledHeader = styled.div`
    font-size: 30px;
    font-weight: bold;
    padding: 1rem 0;
`

const Input = styled.input`
    width: 50rem;
    height: 2rem;
    margin-bottom: 1rem;
    font-size: 25px;
`

const Textarea = styled.textarea`
    width: 50rem;
    height: 35rem;
    font-size: 20px;
    margin-bottom: 1rem;
`
const Button = styled.button`
    padding: 0.5rem 0.7rem;
    border: 1px solid black;
    background: white;
    &:hover {
        background-color: rgb(150, 150, 150);
        color: white;
    }
`
export default SingleEdit
