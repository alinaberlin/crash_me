const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const PetSitterSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: String,
  sitterId: Number
},
{ collection: 'happypet' }
)

PetSitterSchema.plugin(AutoIncrement, {inc_field: 'sitterId', model: 'PetSitter'})
module.exports = mongoose.model('PetSitter', PetSitterSchema)
