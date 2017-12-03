const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const PetSchema = mongoose.Schema({
  type: String,
  name: String,
  gender: String,
  sterile: Boolean,
  ownerId: Number
})

PetSchema.plugin(AutoIncrement, {inc_field: 'id'})
module.exports = mongoose.model('Pet', PetSchema)
