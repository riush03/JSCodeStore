//reading and writing file data using node.js

//using the fs module => filesystem
const fs = require('fs');

//to reade a fielreadFile()
fs.readFile('denis.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

//to write a file use the writeFile
const input = "This is simple node.js program to represent how to write to a file";
fs.writeFile('output.txt',input,err =>{
    if(err) throw err;
    console.log("Just wrote to a text file.");
});