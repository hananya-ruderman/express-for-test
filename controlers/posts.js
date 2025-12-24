import fs from 'fs/promises'
import express from "express"
import path from 'path'
import { readPosts } from "../utils/postsFunctions.js"



const __dirname = path.resolve()
const usersPath = path.join(__dirname, "data", "posts.json")

export const getAllPosts = async (req, res) => {
    const posts = await readPosts()
    if (posts.length){
        res.status(200).json(posts)
    } else {
        res.status(400).send("there is no posts for this user")
    }
}


export const registerUser = async (req, res) => {
    try {
        const users = await readUsers()
        const userDetails = req.body
        const isExist = users.some(user => user.username === userDetails.username)
        if (isExist) {
            res.status(400).send("the user olready registred")
        }
        const id = newId(users.length)
        userDetails.id = id
        users.push(userDetails)
        await writeUsersToFile(users)
        res.status(201).json({username: userDetails.username, id: userDetails.id, email: userDetails.email})
    } catch {
        res.status(500).send("server couldn`t extract data")
    }
}


export const g = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await validateUser(username, password)
        console.log(user)
        if (user) {
            res.json({
                message: "Login successful",
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }
            })
        } else {
            res.status(400).send("user not found")
        }    
    } catch {
        res.status(500).send("server couldn`t extract data")
    }
}