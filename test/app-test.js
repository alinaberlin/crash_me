
import app from '../src/app'
import test from 'ava'
import request from 'supertest'

test('create a person', async t =>{
  const ownerToCreate = {
                        name:'Alina', age :37, 
                        email:"alina.ghetler@gmail.com", 
                        address :"Landsberger Allee 171"}
  const res = await request(app).post('/owner').send(ownerToCreate)
  t.is(res.status, 200)
  t.is(res.body.name, ownerToCreate.name)
})