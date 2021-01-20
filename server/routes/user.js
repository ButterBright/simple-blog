import express from "express"
import userModel from "../model/userModel.js"
import { hash, compare } from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
const router = express.Router()

router.get("/:username", async (r, w) => {
    try {
        const { username } = r.params
        const user = await userModel.findOne({ username: username })
        if (!user) return w.status(401).json({ message: "user doesn't exists" })
        w.status(200).json(user)
    } catch (err) {
        console.log(err.message)
    }
})

router.post("/login", async (r, w) => {
    try {
        const user = await userModel.findOne({ username: r.body.username })
        if (!user) return w.status(401).json({ message: "user doesn't exist" })
        const res = await compare(r.body.password, user.password)
        if (res) {
            const token = await jwt.sign(
                { id: user._id },
                process.env.jwtPrivateKey
            )
            // w.header("auth-token", token).json({
            //     message: "login successfully",
            // })
            w.status(200).json({ token })
        } else w.status(401).json({ message: "wrong username or password" })
    } catch (err) {
        w.status(400).json({ message: err.message })
    }
})

router.post("/register", async (r, w) => {
    try {
        const res = await userModel.find({ username: r.body.username })
        if (res.length)
            return w.status(409).json({ message: "username already exists" })
        const hashedPassword = await hash(r.body.password, 10)
        let user = new userModel({
            username: r.body.username,
            password: hashedPassword,
            img: r.body.img ? r.body.img : "https://pic3.zhimg.com/v2-7511b59b7cd73ee8a6c47a8eacd41742_b.jpg",
        })
        await user.save()
        w.status(201).json({ message: "register successfully" })
    } catch (err) {
        w.status(400).json({ message: err.message })
    }
})

export default router
