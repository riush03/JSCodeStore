//using the fs Promises API
const fs = require("fs").promises;
const path = require('path');
const filePath = path.join(process.cwd(),"denis.txt");

async function run() {
    try{
        const contents = await fs.readFile(filePath,"utf8");
        console.log("File contents: ",contents);
    } catch(error) {
        console.error(error);
    }
}

run();