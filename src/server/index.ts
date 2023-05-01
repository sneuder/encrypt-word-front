import express from 'express'

const app = express()
const PORT = 8080

// middlewares
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
