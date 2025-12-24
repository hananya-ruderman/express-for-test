import fs from 'fs/promises'
import path from 'path'


const __dirname = path.resolve()
const usersPath = path.join(__dirname, "data", "posts.json")

export const readPosts = async () => {
    try {
        let data = await fs.readFile(usersPath)
        data = JSON.parse(data)
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}

export const writePostsToFile = async (posts) => {
    try {
        fs.writeFile(usersPath, JSON.stringify(posts, null, 2))
        console.log("succede")
    } catch (err) {
        console.log(err)
    }
}
