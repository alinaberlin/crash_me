const fs = require('fs')
const Owner = require('../models/owner')
const Pet = require('../models/pet')

async function findAll() {
  return Owner.find()
}

async function find(id) {
  return Owner.findOne({id})
}

async function findOwnerPets(id) {
  return Pet.find({ownerId : id})
}

async function add(owner){
  return  Owner.create(owner)
}

async function del(id) {
  return  Owner.remove({id})
}

module.exports = {
  findAll,
  find,
  add, 
  del
}