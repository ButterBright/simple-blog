import express from "express"
import postModel from "../model/postModel.js"
import reviewModel from "../model/reviewModel.js"
import mongoose from "mongoose"

const router = express.Router()

router.get("/", async (r, w) => {
    const posts = await postModel.find()
    w.send(posts)
})

router.get("/recent", async (r, w) => {
    try {
        const recentPosts = await postModel.find().limit(7).sort({ time: -1 })
        w.status(200).json(recentPosts)
    } catch (err) {
        w.status(404).json({ message: err.message })
    }
})

router.get("/:id", async (r, w) => {
    const { id } = r.params
    try {
        const post = await postModel.findById(id)
        if (!post) {
            w.status(404).json({ message: "id not found" })
            return
        }
        w.status(200).json(post)
    } catch (err) {
        w.status(404).json({ message: err.message })
    }
})

router.post("/", async (r, w) => {
    const post = new postModel(r.body)
    try {
        await post.save()
        w.status(201).json(post)
    } catch (err) {
        w.status(409).json({ message: err.message })
    }
})

router.delete("/:id", async (r, w) => {
    const { id } = r.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        w.status(404).json({ message: "id not found" })
        return
    }
    try {
        await postModel.findByIdAndRemove(id)
        await reviewModel.deleteMany({articleId: id})
        w.status(200).json({ message: `${id} deleted` })
    } catch (err) {
        w.status(400).json({ message: err.message })
    }
})

router.put("/:id", async (r, w) => {
    const { id } = r.params
    try {
        const post = await postModel.findById(id)
        if (!post) return w.status(404).json({ message: "id not found" })
        post.set(r.body)
        await post.save()
        w.json({ message: `${id} updated` })
    } catch (err) {
        w.status(400).json({ message: err.message })
    }
})

router.put("/:id/likePost", async (r, w) => {
    const { id } = r.params
    try {
        const post = await postModel.findById(id)
        if (!post) return w.status(404).json({ message: "id not found" })
        post.set({ ...post, likes: post.likes + 1 })
        await post.save()
        w.json({ message: `${id} updated` })
    } catch (err) {
        w.status(400).json({ message: err.message })
    }
})

export default router
