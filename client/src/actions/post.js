import axios from "axios"

export const post = () => async dispatch => {
    const res = await axios.get("http://localhost:5000/posts")
    dispatch({
        type: "FETCH_POSTS",
        payload: {
            posts: res.data,
        },
    })
}

export const deletePost = () => async (dispatch, id) => {
    await axios.delete(`http://localhost:5000/posts/${id}`)
    const res = await axios.get("http://localhost:5000/posts")
    dispatch({
        type: "DELETE_POST",
        payload: {
            posts: res.data,
        },
    })
}

export const getRecentPosts = () => async dispatch => {
    const res = await axios.get("http://localhost:5000/posts/recent")
    dispatch({
        type: "GET_RECENT_POSTS",
        payload: {
            recentPosts: res.data,
        },
    })
}
