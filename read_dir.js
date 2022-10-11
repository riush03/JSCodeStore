//listing files from a directory using node.js
const fs = require('fs');
const util = require('util');
//unix-like system call for reading a directory
const fs_readdir = util.promisify(fs.readdir);

(async() => {
    let dir = '.';
    if(process.argv[2]) dir = process.argv[2];
    const files = await fs_readdir(dir); 
    for(let fn of files)
    {
        console.log(fn);
    }
})().catch(err=> {console.error(err);});