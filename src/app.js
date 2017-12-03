const express = require('express')
const bodyParser = require('body-parser')
const owner = require('./routes/owner')
const app = express()

require('./database-conection')

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use('/owner', owner)


module.exports = app
