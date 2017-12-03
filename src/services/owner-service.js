const fs = require('fs')
const Owner = require('../models/owner')
const allOwners = [];


async function findAll() {
  return Owner.find()
}

async function find(id) {
  return Owner.findOne({id})
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