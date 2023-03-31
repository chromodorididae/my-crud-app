const Posts = require('../models/postModel')
//postModel (schema) and posts (array) inside backend
const posts = require('../models/posts')

module.exports.index = async (req, res) => {
    try {
        const posts = await Posts.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

/*
seed, index, delete, update, create, show
*/