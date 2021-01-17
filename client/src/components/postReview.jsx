import styled from "styled-components"
import { postReviews } from "../actions/review"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useState } from "react"

function PostReview() {
    const { id } = useParams()
    const [review, setReview] = useState("")
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)?.user
    const username = user?.username
    const img = user?.img
    function handleSubmit(id, review, author, img) {
        if (!user) {
            alert("please login first")
            return
        }
        postReviews(id, review, author, img)(dispatch)
        setReview("")
    }
    return (
        <Container>
            <Title>Release reviews</Title>
            <p>review</p>
            <Text value={review} rows="5" onChange={e => setReview(e.target.value)}></Text>
            <br />
            <Button
                onClick={() =>
                    handleSubmit(id.slice(1, id.length), review, username, img)
                }
            >
                Post
            </Button>
        </Container>
    )
}

const Container = styled.div`
    width: calc(100% - 0rem);
    background-color: white;
    margin: auto;
    padding: 2rem 0;
`

const Title = styled.div`
    font-weight: bold;
    font-size: 20px;
`

const Text = styled.textarea`
    width: 80%;
    height: auto;
    border: 1px solid rgb(100, 200, 255);
`
const Button = styled.button`
    padding: 0.3rem 0.5rem;
    border: 1px solid black;
    background: white;
    margin-top: 1rem;
    &:hover {
        background-color: rgb(100, 200, 300);
        color: white;
    }
`

export default PostReview
