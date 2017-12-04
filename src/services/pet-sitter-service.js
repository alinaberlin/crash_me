const fs = require('fs')
const PetSitter = require('../models/pet-sitter')

async function findAll() {
  return PetSitter.find()
}

async function find(id) {
  return PetSitter.findOne({'sitterId': id})
}

async function add(petSitter){
  return  PetSitter.create(petSitter)
}

async function del(id) {
  return  PetSitter.remove({'sitterId': id})
}

module.exports = {
  findAll,
  find,
  add, 
  del
}