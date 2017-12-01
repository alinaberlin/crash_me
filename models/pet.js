module.exports = class Pet {
  constructor(type, nume, owner, gender, sterile = false)  {
    this.type = type;
    this.nume = nume;
    this.owner = owner;
    this.gender = gender;
    this.sterile = sterile;
  }
}