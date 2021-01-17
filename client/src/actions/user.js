import axios from "axios"

const auth = (username, password, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:5000/users/login", {
            username: username,
            password: password,
        })
        const user = await axios.get(`http://localhost:5000/users/${username}`)
        dispatch({
            type: "AUTH",
            payload: {...res.data, username: username, img: user.data.img},
        })
        alert("successfully login")
        history.push("/")
    } catch (err) {
        alert("wrong username or password")
        console.log(err.message)
    }
}

export default auth
