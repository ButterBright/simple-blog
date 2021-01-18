const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "AUTH":
            localStorage.setItem("profile", JSON.stringify({...action?.payload}))
            return { ...state, user: action.payload }
        case "LOGOUT": 
            return {}
        default:
            return state
    }
}

export default authReducer
