/***************************
 * Async/await
 * async before a function means a function always returns a promise
 */

async function f(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(() => resolve("done!"),1000)
    });

    let result = await promise;
    console.log(result);
}

f();