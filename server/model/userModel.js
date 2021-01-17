import mongoose from "mongoose"

const schema = {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: "https://pic3.zhimg.com/v2-7511b59b7cd73ee8a6c47a8eacd41742_b.jpg"
    }
}

const userSchema = new mongoose.Schema(schema)

const userModel = mongoose.model("user", userSchema)

export default userModel
