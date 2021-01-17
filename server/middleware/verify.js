import jwt from "jsonwebtoken"

async function verify(r, w, next) {
    // const token = r.header["auth-token"]
    // if (!token) return w.status(401).json("access denied")
    // const token = r.headers.authorization.split(" ")[1]
    const auth = r.headers.authorization
    if (auth) {
        const token = auth.split(" ")[1]
        try {
            const user = await jwt.verify(token, process.env.jwtPrivateKey)
            r.user = user
            next()
        } catch (err) {
            console.log(err.message)
        }
    } else {
        console.log("haven't logged in")
    }
}
export default verify
