import styled from "styled-components"
import { deletePost } from "../actions/post"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

function Info({ info }) {
    const dispatch = useDispatch()
    function handleDelete(id) {
        deletePost()(dispatch, id)
    }

    return (
        <Container>
            <td>{info._id}</td>
            <td>{info.title}</td>
            <td>{info.author}</td>
            {/* <td>{`${info.tags}`}</td> */}
            <td>{info.time.slice(0, 10)}</td>
            <td>
                <Container2>
                    <Link to={`/post:${info._id}`}style={{textDecoration: "none", color: "black"}}>
                        <Read>read </Read>
                    </Link>
                    <Link to={`/edit:${info._id}`}style={{textDecoration: "none", color: "black"}}>
                        <Edit>edit </Edit>
                    </Link>
                    <Delete onClick={() => handleDelete(info._id)}>
                        delete
                    </Delete>
                </Container2>
            </td>
            {/* <td>{info.likes}</td> */}
        </Container>
    )
}

const Container = styled.tr`
    height: 3rem;
    color: rgb(50, 50, 50);
    &:nth-child(even) {
        background-color: rgb(243, 243, 243);
    }
`

const Container2 = styled.span`
    /* margin-left: 2rem; */
`

const Read = styled.span`
    &:hover {
        color: blue;
    }
`

const Edit = styled.span`
    &:hover {
        color: yellow;
    }
`

const Delete = styled.span`
    &:hover {
        color: red;
    }
`

export default Info
