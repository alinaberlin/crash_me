const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const OwnerSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address :String,
})
// we need to import moongoose and also to make a <Schema> to tell our db what structure shoul it find,
//mongodb is not a relational db, this means is not strict as SQL, who is a relational db.
OwnerSchema.plugin(AutoIncrement, {inc_field: 'id'})
module.exports = mongoose.model('Owner', OwnerSchema)


/*module.exports = class Owner {
  constructor(id, name, age, email, address ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
    this.pets = [];
  }
 addPet(pet) {
   this.pets.push(pet);
 }
  static create(owner) {
   return new Owner (owner.id, owner.name, owner.age, owner.email, owner.address)
 }
} */
//after we create OwnerSchema we don't need the old class Owner