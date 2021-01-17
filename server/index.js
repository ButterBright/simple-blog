import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import post from "./routes/post.js"
import user from "./routes/user.js"
import review from "./routes/review.js"
import cors from "cors"

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: "50mb" }))
app.use(cors())
app.use("/posts", post)
app.use("/users", user)
app.use("/reviews", review)

mongoose
    .connect("mongodb://localhost/blog", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("error connecting to mongodb"))

app.listen(5000, () => console.log("listening on port 5000"))
