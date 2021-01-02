const express = require('express')
const bodyparser = require('body-parser')

var app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/resume', (req, res) => {
    res.render('resume.ejs')
})

app.get('/projects', (req, res) => {
    res.render('projects.ejs')
})

app.listen(3000, () => {
    console.log("https://philipknott.net")
})