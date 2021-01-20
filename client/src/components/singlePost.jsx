import Header from "./header"
import Nav from "./nav"
import styled from "styled-components"
import GlobalStyle from "./globalStyle"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import gfm from "remark-gfm"
import { InlineMath, BlockMath } from "react-katex"
import math from "remark-math"
import "katex/dist/katex.min.css"
import PostReview from "./postReview"
import ReviewList from "./reviewList"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { post as loadPost } from "../actions/post"
// todo: css styling after adding Nav
// import ReactHtmlParser from 'react-html-parser';

function SinglePost() {
    const dispatch = useDispatch()
    useEffect(() => loadPost()(dispatch), [])
    // const posts = useSelector(state => state.post).posts

    const renderers = {
        code: ({ language, value }) => {
            return <SyntaxHighlighter language={language} children={value} />
        },
        inlineMath: ({ value }) => <InlineMath math={value} />,
        math: ({ value }) => <BlockMath math={value} />,
    }

    const { id } = useParams()
    const posts = useSelector(state => state.post)
    if (!posts.posts) return <div></div>
    const post = posts.posts.filter(
        post => post._id === id.slice(1, id.length)
    )[0]
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Container>
                <Nav />
                <Container2>
                    <StyledHeader>{post.title}</StyledHeader>
                    <Container3>
                        <Author>{post.author}</Author>
                        <div>{post.time.slice(0, 10)}</div>
                    </Container3>
                    <ReactMarkdown
                        plugins={[math, gfm]}
                        renderers={renderers}
                        children={post.content}
                        // style={{padding:"0 2rem"}}
                    />
                    <ReviewList />
                    <PostReview />
                </Container2>
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    @media screen and (max-width: 959px) {
        flex-direction: column;
        width: 80%;
        margin: auto;
        margin-top: 2rem;
    }
    @media screen and (max-width: 511px) {
        flex-direction: column;
        width: 100%;
    }
`

const Container2 = styled.div`
    width: 40%;
    padding: 2rem;
    background-color: white;
    @media screen and (max-width: 959px) {
        width: calc(100% - 4rem);
    }
`

const StyledHeader = styled.div`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
`

const Container3 = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`

const Author = styled.div`
    padding-right: 0.5rem;
    font-weight: bold;
`

export default SinglePost
