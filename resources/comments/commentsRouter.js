const express = require('express')

const commentsRouter = express.Router()

commentsRouter.get('/', (req, res) => {
  res.status(200).json({comment: []})
})

commentsRouter.post('/', (req, res) => {
  if (!req.body.text)
    return res.status(400).json({ message: "Please provide text for the comment." })

  res.status(201).json({comment: 'created'})
})

module.exports = commentsRouter
