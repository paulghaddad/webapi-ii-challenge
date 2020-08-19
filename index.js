const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const port = 3000

const postsRouter = require('./resources/posts/postsRouter')

const apiRouter = express.Router()

app.use('/api', apiRouter)

apiRouter.use('/posts', postsRouter)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
