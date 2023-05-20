import express from 'express'
import routes from './routes'

const app = express()
const router = express.Router()

const PORT = 8080

// middlewares
app.use(express.json())
app.use('/api', router)
// initializing routes
routes(router)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
