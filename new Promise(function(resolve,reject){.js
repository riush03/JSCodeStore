new Promise(function(resolve,reject){
    setTimeout(() => resolve(1),1000);
    //Promises chaining
}).then(function(result){
    console.log(result);
    return new Promise(function(resolve,reject){
        setTimeout(() => resolve(1),1000);
    });
}).then(function(result){
    console.log(result);
    return new Promise(function(resolve,reject){
        setTimeout(() => resolve(1),1000);
    });
}).then(function(result){
    console.log(result);
});