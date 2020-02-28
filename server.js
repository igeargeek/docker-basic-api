const express = require('express')
const app = express()
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
  blog.save((err) => {
    if (err) return res.send('created fail')
    return res.send('created success')
  })
})

app.get('/blogs', async (req, res) => {
  const blogs = await Blog.find()
  res.json(blogs)
})

app.get('/about-me', (req, res) => {
  res.send(`my name\'s noppadol lanngain ${process.env.APP_NAME}`)
})

app.listen(port, async () => {
  console.log(`running server now! ${port}`)
})

module.exports = app