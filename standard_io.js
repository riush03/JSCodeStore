//handling standard I/O with node.js

//girst let the program listen for user input
process.stdin.on("data",(data)=>{
    //process on each data event
    const name = data.toString().trim().toUpperCase();
    //check if the user have enter the name
    if(name !== "")
    {
        process.stdout.write('Hello ${name} ');
    }else{
        process.stderr.write("The input was empty")
    }
});