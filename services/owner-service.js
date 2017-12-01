const fs = require('fs')
const Owner = require('../models/owner')
const allOwners = [];


function findAll() {
  return allOwners
}

async function find(id) {
  const owner = allOwners.filter(owner => owner.id == id)
  return owner[0]
}

async function add(owner){
  const lastOwner = allOwners[allOwners.length -1]

  const lastOwnerId = lastOwner && lastOwner.id || 0
  owner.id = lastOwnerId + 1
  
  owner = Owner.create(owner)
  allOwners.push(owner)
  //await saveAll(allOwners)
  return owner
}

async function del(id) {
  const ownerIndex = allOwners.findIndex(p => p.id == id)
  if (ownerIndex < 0) return

  allOwners.splice(ownerIndex, 1)
}

module.exports = {
  findAll,
  find,
  add, 
  del
}