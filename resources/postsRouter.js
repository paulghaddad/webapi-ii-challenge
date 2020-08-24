const express = require('express')
const db = require('../data/db')
const commentsRouter = require('./commentsRouter')

const postsRouter = express.Router()

postsRouter.get('/', (req, res) => {
  db.find()
  .then(posts => {
    return res.status(200).json({ posts: posts })
  })
  .catch(err => {
    return res.status(500).json({error: 'The posts information could not be retrieved.'})
  })
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
