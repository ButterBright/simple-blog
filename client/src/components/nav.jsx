import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { getRecentPosts } from "../actions/post"
import { Link } from "react-router-dom"

function Nav() {
    const dispatch = useDispatch()
    useEffect(() => getRecentPosts()(dispatch), [])
    const recentPosts = useSelector(state => state.post).recentPosts
    return (
        <Container>
            <Title>recent articles</Title>
            <List>
                {recentPosts &&
                    recentPosts.map(r => (
                        <Link to={`/post:${r._id}`} key={r._id} style={{textDecoration: "none", color: "black"}}>
                            <Item>{r.title}</Item>
                        </Link>
                    ))}
            </List>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;
    padding: 2rem 2rem;
`

const Title = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid rgb(200, 200, 200);
`

const List = styled.ul`
    list-style: none;
    font-size: 18px;
    line-height: 35px;
`

const Item = styled.li`
    text-decoration: none;
`

export default Nav
