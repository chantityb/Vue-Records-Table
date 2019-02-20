const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(_dirname, '/dist')))

const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
  console.log('Server is running at:', PORT)
})