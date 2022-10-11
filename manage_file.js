const fs = require('fs');
const path = require('path');
const filePath = path.join(process.cwd(),"denis.txt");

//read file syschronomaously using rwadFileSync()
const contents = fs.readFileSync(filePath,"utf-8");
console.log("File contents: ",contents);

//convert lowerCase to upperCase
const upperContents = contents.toUpperCase();

//to update the fiel we can use the writeFileSync()
fs.writeFileSync(filePath,upperContents);
console.log("File updated");