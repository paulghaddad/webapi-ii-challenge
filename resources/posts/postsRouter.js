const express = require('express')
const commentsRouter = require('../comments/commentsRouter')

const postsRouter = express.Router()

postsRouter.get('/', (req, res) => {
  res.send('GET /api/posts')
})

postsRouter.get('/:postId', (req, res) => {
  res.send('GET /api/posts/:id')
})

postsRouter.post('/', (req, res) => {
  res.send('POST /api/posts')
})

postsRouter.put('/:postId', (req, res) => {
  res.send('PUT /api/posts/:id')
})

postsRouter.delete('/:postId', (req, res) => {
  res.send('DELETE /api/posts/:id')
})

postsRouter.use('/:postId/comments', commentsRouter)

module.exports = postsRouter
