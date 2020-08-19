const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./resources/posts/postsRouter')

const apiRouter = express.Router()

app.use('/api', apiRouter)

apiRouter.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
