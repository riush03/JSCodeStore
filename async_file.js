const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(),"denis.txt");

fs.readFile(filePath,"utf8",(err,contents)=>{
    if(err)
    {
        return console.log(err);
    }
    console.log("File contents:",contents);
    const upperCaseContent = contents.toUpperCase();

    updateFile(filePath,upperCaseContent);
});

function updateFile(filePath,contents){
    fs.writeFile(filePath,contents,(err)=>{
        if (err) throw err;
        console.log("File updated!");
    });
}

//to demostrante this program is asychronomous
setInterval(() => process.stdout.write("***** \n"),1).unref();

//let add delay between reading the files
setTimeout(() => updateFile(filePath, upperCaseContent),10);