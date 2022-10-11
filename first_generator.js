const { on } = require("events");

function* generateSequence(){
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();
/**** 
let one = generator.next();
console.log(JSON.stringify(one));
**/

for(let value of generator)
{
    console.log(value);
}

let sequence = [0,...generateSequence()]
console.log(sequence)