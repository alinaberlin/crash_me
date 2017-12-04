const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const PetSitterSchema = mongoose.Schema({
  name: String,
  email: String,
  address: String
})

//PetSitterSchema.plugin(AutoIncrement, {inc_field: 'id'})
module.exports = mongoose.model('PetSitter', PetSitterSchema)
