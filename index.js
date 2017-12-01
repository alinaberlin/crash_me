const express = require('express')
const bodyParser = require('body-parser')
const  OwnerService = require('./services/owner-service')

const app = express()

app.set('view engine', 'pug')

app.use(bodyParser.json())

//app.get('/', async(req, res, next) => {
  //res.render('index')
  //res.sendFile(__dirname + '/index.html')
 // res.send(await OwnerService.findAll())
//})

app.get('/owner', async(req, res, next) => {
  const owners = await OwnerService.findAll()
  res.render('owner', {owners})
})
app.get('/owner/:id', async(req, res, next) => {
  const owner = await OwnerService.find(req.params.id)
 res.send(owner)
 })
app.post('/owner', async(req, res, next) => {
  const owner = await OwnerService.add(req.body)
  res.send(owner)
})
app.delete('/owner/:id', async(req, res, next) => {
 await OwnerService.del(req.params.id)
res.send()
})

app.listen(3000, () => {
  console.log('server listening.')
})