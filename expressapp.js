const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about comes!')
})
app.get('/hee', (req, res) => {
  res.send('hee comes!')
})


app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})