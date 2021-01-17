import styled from "styled-components"
import GlobalStyle from "./globalStyle"
import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Header from "./header"
// import { CKEditor } from "@ckeditor/ckeditor5-react"
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

function Edit() {
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const history = useHistory()
    async function handleSubmit(title, author, content, tags) {
        if (title == "" || content == "") return
        try {
            await axios.post("http://localhost:5000/posts", {
                title: title,
                author: author,
                content: content,
                tags: tags,
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
                <StyledHeader>Write new aritcles</StyledHeader>
                <Input
                    onChange={e => setTitle(e.target.value)}
                    placeholder="please add title here"
                ></Input>
                <br />
                <Textarea onChange={e => setContent(e.target.value)}></Textarea>
                {/* <CKEditor
                    editor={ClassicEditor}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor)
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        console.log({ event, editor, data })
                        setContent(data)
                    }}
                /> */}
                <br />
                <Button
                    onClick={() =>
                        handleSubmit(title, "Bright", content, ["js", "react"])
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
export default Edit
