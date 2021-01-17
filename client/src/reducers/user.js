const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "AUTH":
            localStorage.setItem("profile", JSON.stringify({...action?.payload}))
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export default authReducer
