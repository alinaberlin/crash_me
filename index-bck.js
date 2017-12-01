
/*const red = require("ansi-red");*/

const Student = require('./student');
const Teacher = require('./teacher');
const Course = require('./course');
const Person = require('./person');
const Database = require('./database');
console.log("Hello word!");



const alina = new Teacher("Alina", 37);
const mihai = new Student('Mihai Miaha', 23);
const course = new Course('English', alina);
course.addStudent(mihai);

const instructor = [alina, mihai]


Database.save(instructor);
Database.save(course);

//const loadedFile = Database.load();
//console.log(loadedFile[0].age);


/* folosim Database.save(instructor) pt ca sa salvam personele ~save~ */

/*console.log(red(alina.name), alina.age);*/

/* folosim asi-red librarie de js pentru a colora textul in rosu, 1-instalam ansi-red   npm i ansi-red --save 
iar apoi folosim o constanta de ex const red = require("ansi-red"); ii spunem sa importe
astfel incat sa o puteam folosi) */