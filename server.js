const express = require('express')
const serveStatic = require('serve-static')


const app = express()

app.use(serveStatic(__dirname + "/dist"));

const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running at:', PORT)
})