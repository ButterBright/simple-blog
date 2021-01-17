import Post from "./post"
import { post } from "../actions/post"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

function PostList() {
    const dispatch = useDispatch()
    useEffect(() => post()(dispatch), [])
    const posts = useSelector(state => state.post).posts
    return (
        <div style={{width:"calc(40% + 4rem)"}}>{posts && posts.map(p => <Post postInfo={p} key={p._id} />)}</div>
    )
}

export default PostList
