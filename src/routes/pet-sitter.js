const express = require('express')
const router = express.Router()
const  PetSitterService = require('../services/pet-sitter-service')

router.get('/', async (req, res, next) => {
    const sitter = await PetSitterService.findAll()
    res.send(sitter)
})

router.get('/:id', async (req, res, next) => {
    const sitter = await PetSitterService.find(req.params.id)
    res.send(sitter)
})

router.post('/', async (req, res, next) => {
    const sitter = await PetSitterService.add(req.body)
    res.send(sitter)
})

router.delete('/:id', async (req, res, next) => {
    await PetSitterService.del(req.params.id)
    res.send()
})

module.exports = router
