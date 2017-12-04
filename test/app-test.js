
import app from '../src/app'
import test from 'ava'
import request from 'supertest'
import PetSitter from '../src/models/pet-sitter'

test('create a owner', async t =>{
  const ownerToCreate = {
                        name:'Alina', age :37, 
                        email:"alina.ghetler@gmail.com", 
                        address :"Landsberger Allee 171"}
  const res = await request(app).post('/owner').send(ownerToCreate)
  t.is(res.status, 200)
  t.is(res.body.name, ownerToCreate.name)
})

test('add pet to owner', async t =>{
  const petToAddToOwner = {
                              type: "cat",
                              name: "blanosu",
                              gender: "male",
                              sterile: false
                            }
  const res = await request(app).post('/owner/1/pet').send(petToAddToOwner)
  t.is(res.status, 200)
  t.is(res.body.ownerId, 1)
})

test('add pet sitter', async t =>{
  const petSitter = {
    name:'Alina', age :37, 
    email:"alina.ghetler@gmail.com", 
    address :"Landsberger Allee 171"
                            }
  const res = await request(app).post('/sitter').send(petSitter)
  t.is(res.status, 200)
  t.is(res.body.name, petSitter.name)
})

test('find pet sitter', async t =>{
  const petSitter = {
    name:'Alina', 
    age :37, 
    email:"alina.ghetler@gmail.com", 
    address :"Landsberger Allee 171"
                            }
  const createdPetSitter = await PetSitter.create(petSitter)
  const res = await request(app).get('/sitter/' + createdPetSitter.sitterId).send()
  t.is(res.status, 200)
  t.is(res.body.name, petSitter.name)
})
