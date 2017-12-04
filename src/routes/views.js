const express = require('express')
const router = express.Router()


router.get('/owner/add', async (req, res, next) => {
    res.render('add-owner')
})

router.get('/owner/view/:id', async (req, res, next) => {
    res.render('owner', {ownerId: req.params.id})
})

router.get('/owner/:id/pet/add', async (req, res, next) => {
    res.render('add-pet', {ownerId: req.params.id})
})

module.exports = router
