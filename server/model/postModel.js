import mongoose from "mongoose"

const schema = {
    title: String,
    content: String,
    author: String,
    tags: [String],
    cover: String,
    likes: { type: Number, default: 0 },
    time: { type: Date, default: new Date() },
}

const postSchema = new mongoose.Schema(schema)

const postModel = mongoose.model("post", postSchema)

export default postModel
