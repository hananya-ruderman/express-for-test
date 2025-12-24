import express from "express"
import { getAllPosts } from "../controlers/posts.js"


const ruoter = express.Router()

ruoter.route("/")
    .get(getAllPosts)


export default ruoter