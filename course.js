module.exports = class Course  {
   constructor(type, teacher) {
     this.type = type; 
     this.teacher =teacher;
     this.students = [];
   }
  addStudent(student) {
    this.students.push(student);
  }
}
