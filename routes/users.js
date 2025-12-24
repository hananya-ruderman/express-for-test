import express from "express"
import { registerUser, userLogin } from "../controlers/users.js"


const ruoter = express.Router()

ruoter.route("/")
    .get(userLogin)
    .post(registerUser)

export default ruoter