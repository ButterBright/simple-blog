import styled from "styled-components"

function Review({ reviewInfo }) {
    return (
        <Container>
            <Img src={reviewInfo.img} alt="userImg" />
            <Info>
                <h1>{reviewInfo.author}</h1>
                <h2>{reviewInfo.time.slice(0, 10)}</h2>
                <p>{reviewInfo.review}</p>
            </Info>
        </Container>
    )
}

const Container = styled.div`
    height: 10vh;
    display: flex;
    background-color: rgb(240, 240, 240);
    border-bottom: 3px solid rgb(100, 200, 255);
    padding: 1rem;
    margin-bottom: 0.5rem;
`

const Img = styled.img`
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    margin-top: 0.4rem;
    margin-right: 1.5rem;
`

const Info = styled.div`
    h1 {
        font-size: 15px;
    }
    h2 {
        font-size: 12px;
    }
`

export default Review
