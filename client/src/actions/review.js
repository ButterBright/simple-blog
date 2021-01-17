import axios from "axios"
import API from "../api/index"

export const getReviews = id => async dispatch => {
    const res = await axios.get(`http://localhost:5000/reviews/${id}`)
    dispatch({
        type: "FETCH_REVIEWS",
        payload: res.data,
    })
}

export const postReviews = (id, review, author, img) => async dispatch => {
    // await axios.post(`http://localhost:5000/reviews/${id}`, {
    await API.post(`/reviews/${id}`, {
        review: review,
        author: author,
        img: img,
        articleId: id,
    })
    const res = await axios.get(`http://localhost:5000/reviews/${id}`)
    dispatch({
        type: "FETCH_REVIEWS",
        payload: res.data,
    })
}
