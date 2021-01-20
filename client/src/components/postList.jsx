import Post from "./post"
import { post } from "../actions/post"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import styled from "styled-components"

function PostList() {
    const dispatch = useDispatch()
    useEffect(() => post()(dispatch), [])
    const posts = useSelector(state => state.post).posts
    return (
        <Container>
            {posts && posts.map(p => <Post postInfo={p} key={p._id} />)}
        </Container>
    )
}

const Container = styled.div`
    width: calc(40% + 4rem);
    @media screen and (max-width: 959px) {
        width: calc(100%);
    }
`

export default PostList
