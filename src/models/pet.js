const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const PetSchema = mongoose.Schema({
  type: String,
  name: String,
  gender: String,
  sterile: Boolean,
  ownerId: Number
},
{ collection: 'happypet' }
)

PetSchema.plugin(AutoIncrement, {inc_field: 'petId', model: 'Pet'})
module.exports = mongoose.model('Pet', PetSchema)
