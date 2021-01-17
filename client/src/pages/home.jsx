import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "../App"
import EditList from "../components/editList"
import Edit from "../components/edit"
import SinglePost from "../components/singlePost"
import SingleEdit from "../components/singleEdit"
import Login from "../components/login"
import Register from "../components/register"

function Home() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/editlist" component={EditList} />
                <Route path="/edit" component={Edit} />
                <Route path="/post:id" component={SinglePost} />
                <Route path="/edit:id" component={SingleEdit} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    )
}

export default Home
