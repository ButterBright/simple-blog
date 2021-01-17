import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Info from "./info"
import { post } from "../actions/post"
import styled from "styled-components"

function InfoList() {
    const dispatch = useDispatch()
    useEffect(() => {
        post()(dispatch)
    }, [])
    const infos = useSelector(state => state.post).posts
    return (
        <div>
            <Table>
                <tbody>
                    <Header>
                        <Id>Id</Id>
                        <td>title</td>
                        <td>author</td>
                        <td>time</td>
                        <td>Operation</td>
                    </Header>
                    {infos && infos.map(i => <Info info={i} key={i._id} />)}
                </tbody>
            </Table>
        </div>
    )
}

const Table = styled.table`
    text-align: center;
    margin: auto;
    margin-top: 2rem;
    border-collapse: collapse;
    border: 1px solid rgb(200, 200, 200);
    width: 45%;
`

const Header = styled.tr`
    height: 3rem;
    font-size: 18px;
    background-color: rgb(200, 200, 200);
`

const Id = styled.th`
    width: 25%;
`

export default InfoList
