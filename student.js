module.exports = class Student {
  constructor(name, age) {
    this.name =name;
    this.age = age;
    this.courses = [];
  }
  addCourse(course) {
    this.courses.push(course);
  }
}