const postReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return {
                ...state,
                posts: action.payload.posts,
            }
        case "DELETE_POST":
            return {
                ...state,
                posts: action.payload.posts,
            }
        case "GET_RECENT_POSTS":
            return {
                ...state,
                recentPosts: action.payload.recentPosts,
            }
        default:
            return state
    }
}

export default postReducer
