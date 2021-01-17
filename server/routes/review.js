import express from "express"
import reviewModel from "../model/reviewModel.js"
import verify from "../middleware/verify.js"

const router = express.Router()

router.get("/:id", async (r, w) => {
    const { id } = r.params
    try {
        const reviews = await reviewModel.find({ articleId: id })
        w.status(200).json(reviews)
    } catch (err) {
        w.status(400).json({ message: err.message })
    }
})

router.post("/:id", verify, async (r, w) => {
    const { id } = r.params
    if (!r.user) return w.status(403).json({ message: "unauthorized" })
    try {
        const review = new reviewModel({
            review: r.body.review,
            author: r.body.author,
            img: r.body.img,
            articleId: id,
        })
        await review.save()
        w.status(201).json(review)
    } catch (err) {
        w.status(400).json(err.message)
    }
})

export default router
