/*exports.save = function save(people) {
  console.log(people)
} functia de mai sus necesita exportarea ei atunci se foloseste exports.numeFunctiei, dar sintaxa de
de mai sus nu e una corecta si de aceace forma corecta e cea de mai jos */


const fs = require('fs');
// in node.js exist a special build in model file system which is not available who is nit available 
//in the browsers and he's allowed you to read file, redirect file, or create file

exports.save = (people) => {
   fs.writeFileSync('./data.json' , JSON.stringify(people));
  console.log(people);
}

exports.load = () => {
  return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
}