import express from "express"
import dotenv from 'dotenv'
import users from './routes/users.js'
import posts from './routes/posts.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())


app.get("/", (req, res) => {
    res.send({ message: "Welcome to Simple Auth API" })
})

app.use("/users", users)
app.use("/posts", posts)


app.listen(PORT)