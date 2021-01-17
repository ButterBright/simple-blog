import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen, faCalendar } from "@fortawesome/free-solid-svg-icons"
import createDOMPurify from "dompurify"
import { JSDOM } from "jsdom"
import marked from "marked"
// import ReactHtmlParser from 'react-html-parser';
import { Markup } from "interweave"
import { Link } from "react-router-dom"

function Post({ postInfo }) {
    const window = new JSDOM("").window
    const DOMPurify = createDOMPurify(window)
    const markdown = DOMPurify.sanitize(marked(postInfo.content))
    return (
        <Container>
            <Title>{`${postInfo.title}`}</Title>
            <Header>
                <Container2>
                    <FontAwesomeIcon
                        icon={faFolderOpen}
                        style={{ color: "rgb(100, 200, 255)" }}
                    />
                    {`${postInfo.author}`}
                </Container2>
                <Container2>
                    <FontAwesomeIcon
                        icon={faCalendar}
                        style={{ color: "rgb(100, 200, 255)" }}
                    />
                    {`${postInfo.time.slice(0, 10)}`}
                </Container2>
            </Header>
            {/* <Content>
                <Markup content={markdown} />
            </Content> */}
            <Content>{postInfo.content}</Content>
            <Link to={`/post:${postInfo._id}`}>
                <Button>Read More</Button>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: calc(100% - 4rem);
    padding: 2rem;
    background-color: white;
    border-radius: 0.2rem;
    border-bottom: 1px solid rgb(233, 233, 233);
`

const Header = styled.div`
    display: flex;
    justify-content: left;
`

const Container2 = styled.div`
    display: flex;
    padding: 0.5rem 0;
    margin-right: 0.7rem;
    color: rgb(150, 150, 150);
`

const Title = styled.div`
    font-weight: bold;
    font-size: 28px;
    padding: 0.5rem 0rem;
    font-family: "Orbitron", sans-serif;
`

const Content = styled.div`
    line-height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
`

const Button = styled.button`
    margin-top: 0.5rem;
    padding: 0.3rem 0.5rem;
    border: 1px solid black;
    background: white;
    &:hover {
        background-color: rgb(100, 200, 300);
        color: white;
    }
`

export default Post
