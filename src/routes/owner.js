const express = require('express')
const router = express.Router()
const  OwnerService = require('../services/owner-service')

router.get('/', async (req, res, next) => {
    const owners = await OwnerService.findAll()
    res.send(owner)
})

router.get('/:id', async (req, res, next) => {
    const owner = await OwnerService.find(req.params.id)
    res.send(owner)
})

router.get('/:id/pet', async (req, res, next) => {
    const pets = await OwnerService.findOwnerPets(req.params.id)
    res.send(pets)
})

router.post('/', async (req, res, next) => {
    const owner = await OwnerService.add(req.body)
    res.send(owner)
})

router.post('/:id/pet', async (req, res, next) => {
    const pet = await OwnerService.addPet(req.params.id, req.body)
    res.send(pet)
})

router.delete('/:id', async (req,
    res, next) => {
    await OwnerService.del(req.params.id)
    res.send()
})

module.exports = router
