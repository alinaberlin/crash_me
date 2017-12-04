const express = require('express')
const bodyParser = require('body-parser')
const owner = require('./routes/owner')
const petSitter = require('./routes/pet-sitter')
const views = require('./routes/views')
const app = express()

require('./database-conection')

app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)
app.use(bodyParser.json())
app.use('/owner', owner)
app.use('/sitter', petSitter)
app.use('/views', views)

module.exports = app
