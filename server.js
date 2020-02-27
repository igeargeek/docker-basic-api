var express = require('express')
var app = express()
const Blog = require('./BlogModel')
const dbConnect = require('./connect')

const port = 3000

const db = dbConnect()

app.get('/', async (req, res) => {
  res.send('hello world')
})

app.post('/blogs', async (req, res) => {
  const blog = new Blog({
    title: 'izone',
    body: 'izone and wizone',
    author: 'admin'
  })
  blog.save(function (err) {
    if (err) return res.send('created fail')
    return res.send('created success')
  })
})

app.get('/blogs', async (req, res) => {
  const blogs = await Blog.find()
  res.json(blogs)
})

app.get('/about-me', function (req, res) {
  res.send(`my name\'s noppadol lanngain ${process.env.APP_NAME}`)
})

app.listen(port, async () => {
  // await db()
  console.log(`running server now! ${port}`)
})

module.exports = app