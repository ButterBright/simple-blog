const reviewReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_REVIEWS":
            return {
                ...state,
                reviews: action.payload,
            }
        default:
            return state
    }
}

export default reviewReducer