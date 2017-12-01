module.exports = class Owner {
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
}