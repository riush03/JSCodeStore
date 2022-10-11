let range = {
    from:1,
    to:5,

    *[Symbol.iterator]() { //short form of  [Symbol.iterator]: function*()
        for(let value = this.from; value <= this.to; value++)
        {
            yield value
        }
    }
};

console.log([...range])

function* generateSequence(start,end)
{
    for(let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes()
{
    //0..9
    yield* generateSequence(48,57);

    //A..Z
    yield* generateSequence(65,90);

    //a..z
    yield* generateSequence(97,122);
}

let str = '';

for(let code of generatePasswordCodes())
{
    str += String.fromCharCode(code);
}

console.log(str)