module.exports = class Person {
  constructor(name, age){
  this.name = name;
  this.age = age;
  }
  static create(person) {
    return new Person(person.id, person.name, person.age);    
  }
}

/* you must use also module.exports  ~ this module exports an person class*/