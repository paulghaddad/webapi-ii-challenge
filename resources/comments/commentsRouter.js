const express = require('express')

const commentsRouter = express.Router()

commentsRouter.get('/', (req, res) => {
  res.send('GET /api/posts/:id/comments')
})

commentsRouter.post('/', (req, res) => {
  res.send('POST /api/posts/:id/comments')
})

module.exports = commentsRouter
