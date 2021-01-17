import mongoose from "mongoose"

const schema = {
    review: { type: String, required: true },
    author: { type: String, required: true },
    time: { type: Date, default: new Date() },
    articleId: { type: String, required: true },
    img: {type: String}
}

const reviewSchema = new mongoose.Schema(schema)

const reviewModel = mongoose.model("reivews", reviewSchema)

export default reviewModel
