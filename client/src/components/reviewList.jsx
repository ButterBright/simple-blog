import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getReviews } from "../actions/review"
import Review from "./review"

function ReviewList() {
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => getReviews(id.slice(1, id.length))(dispatch), [id])
    const review = useSelector(state => state.review).reviews
    return (
        <Container>
            {review && review.map(r => <Review key={r._id} reviewInfo={r} />)}
        </Container>
    )
}

const Container = styled.div`
    width: calc(100% - 0rem);
    background-color: white;
    padding: 2rem 0;
    border-bottom: 1px solid rgb(233, 233, 233);
`

export default ReviewList
