import { combineReducers } from "redux"
import postReducer from "./post"
import reviewReducer from "./review"
import userReducer from "./user"

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    review: reviewReducer
})

export default rootReducer
