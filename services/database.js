

const fs = require('fs');
// in node.js exist a special build in model file system which is not available who is nit available 
//in the browsers and he's allowed you to read file, redirect file, or create file

exports.save = (model) => {
   fs.writeFileSync('./happy.json' , JSON.stringify(model));
  console.log(model);
}

