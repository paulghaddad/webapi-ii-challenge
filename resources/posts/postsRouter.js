const express = require('express')
const commentsRouter = require('../comments/commentsRouter')

const postsRouter = express.Router()

postsRouter.get('/', (req, res) => {
  return res.status(200).json({ posts: [] })
})

postsRouter.get('/:postId', (req, res) => {
  return res.status(200).json({ post: {} })
})

postsRouter.post('/', (req, res) => {
  if (!req.body.title || !req.body.contents)
    return res.status(400).json({ message: "Please provide title and contents for the post." })

  res.status(201).json({post: 'created'})
})

postsRouter.put('/:postId', (req, res) => {
  return res.status(200).json({ post: {} })
})

postsRouter.delete('/:postId', (req, res) => {
  return res.sendStatus(204)
})

postsRouter.use('/:postId/comments', commentsRouter)

module.exports = postsRouter
