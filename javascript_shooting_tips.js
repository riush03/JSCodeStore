//Magic Numbers
const SECONDS_IN_A_DAY = 86400;

for(let i =0; i<SECONDS_IN_A_DAY; i += 1){
    //...
}

//Deep nesting
const exampleArray = [[['value']]];

exampleArray.forEach((array1)=>{
    array1.forEach((array2)=>{
        array2.forEach((el)=>{
            console.log(el);
        })
    })
})

const retrieveFinalValue = (element) =>{
    if(Array.isArray(element)){
        return retrieveFinalValue(element[0]);
    }
    return element;
}

console.log(retrieveFinalValue(exampleArray));

const doSomeComputations = (a,b,c) => {
    const addition = a+b+c;
    const substraction = a-b-c;
    const multiplication = a*b*c;

    return `${addition} ${substraction} ${multiplication}`
}

const add = (a,b,c) => a+b+c;
console.log(doSomeComputations(9,5,3));

const getUserCredentials = (user) =>{
    /*** 
    const name = user.name;
    const surname = user.surname;
    const password = user.password;
    const email = user.email;

    This is simplified using the code below
    **/
   const {name,surname,password,email} = user;
}

//naming variables
//meaningful variable names
getUserData;
getUserInfo;
