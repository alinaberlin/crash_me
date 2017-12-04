const express = require('express')
const bodyParser = require('body-parser')
const owner = require('./routes/owner')
const petSitter = require('./routes/pet-sitter')
const app = express()

require('./database-conection')

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use('/owner', owner)
app.use('/sitter', petSitter)

module.exports = app
