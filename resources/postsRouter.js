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
  db.findById(req.params.postId)
  .then(post => {
    if (!post)
        return res.status(404).json({ error: 'The post with the specified ID does not exist.' })

    return res.status(200).json({ post: post })
  })
  .catch(err => {
    return res.status(500).json({error: 'The post information could not be retrieved.'})
  })
})

postsRouter.post('/', (req, res) => {
  const {title, contents} = req.body

  if (!title || !contents)
    return res.status(400).json({ message: "Please provide title and contents for the post." })

  db.insert({title, contents})
  .then(postIds => {
    return db.findById(postIds[0])
  })
  .then(newPost => {
      return res.status(201).json(newPost)
  })
  .catch(err => {
    return res.status(500).json({error: 'There was an error while saving the post to the database'})
  })
})

postsRouter.put('/:postId', (req, res) => {
  const postId = req.params.postId
  const {title, contents} = req.body

  if (!title || !contents)
    return res.status(400).json({ message: "Please provide title and contents for the post." })

  db.update(postId, {title, contents})
  .then(count => {
    if (!count)
        return res.status(404).json({ error: 'The post with the specified ID does not exist.' })

    return db.findById(postId)
  })
  .then(updatedPost => {
      return res.status(200).json(updatedPost)
  })
  .catch(err => {
    return res.status(500).json({error: 'The post information could not be modified.'})
  })
})

postsRouter.delete('/:postId', (req, res) => {
  const postId = req.params.postId

  db.remove(postId)
  .then(count => {
console.log(count)
    if (!count)
        return res.status(404).json({ error: 'The post with the specified ID does not exist.' })

    return res.sendStatus(204)
  })
  .catch(err => {
    return res.status(500).json({error: 'The post could not be removed'})
  })
})

postsRouter.use('/:postId/comments', commentsRouter)

module.exports = postsRouter
