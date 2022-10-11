/***************************
 *  A proxy object wraps another object and intercepts operations
 *  like reading/writing properties and others, optionally handling
 * them on it own, or transparently allowing the object to handle them
 */
let nums = [0,1,2];

nums = new Proxy(nums,{
    get(target,prop){
        if(prop in target){
            return target[prop];
        }else{
            return 0;
        }
    }
});

console.log(nums[1]); //1
console.log(nums[123]);//no such item

let dict = {
    'Gello':'Hola',
    'Bye':'Adios'
};

dict = new Proxy(dict,{
    get(target,phrase){
        if(phrase in target){
            return target[phrase];
        }else{
            return phrase;
        }
    }
});
console.log(dict['Gello']);
console.log(dict['Welcome to proxy']);

/**************************
 * Iteration with "ownKeys" and getOwnPropertyDescriptor
 */
let user = {
    name: "John",
    age:30,
    _password: "**"
};

user = new Proxy(user,{
     //protected properties with "deleteProperty"
     get(target,prop){
        if(prop.startsWith('_')){
            throw new Error("Access denied!");
        }
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
    },
    set(target,prop,val){
        if(prop.startsWith('_')){
            throw new Error("Access denied!");
        }else{
            target[prop] = val;
            return true;
        }
    },
    deleteProperty(target,prop){
        if(prop.startsWith('_')){
            throw new Error("Access denied!");
        }else{
            delete target[prop];
            return true;
        }
    },
    ownKeys(target){
        return Object.keys(target).filter(key => !key.startsWith('_'));
    },

    getOwnPropertyDescriptor(target,prop){
        return{
            enumerable:true,
            configurable:true
        };
    }
});

for(let key in user) console.log(key);
console.log(Object.keys(user));
console.log(Object.values(user));

try{
    console.log(user._password);
}catch(e){console.log(e.message);}

try{
    user._password = "test";
}catch(e) {console.log(e.message);}

try {
    delete user._password;
}catch(e){console.log(e.message);}
for(let key in user) console.log(key);

//using reflect to foward an operation to the original object
let wifi_user = {
    nsme:"John",
};

wifi_user = new Proxy(user,{
    get(target,prop,receiver){
        console.log(`GET ${prop}`);
        return Reflect.get(target,prop,receiver);
    },
    set(target,prop,val,receiver){
        console.log(`SET ${prop} = ${val}`);
        return Reflect.set(target,prop,val,receiver);
    }
});

let name = user.name;
user.name = "You"
console.log(wifi_user.name)

let app_user = {
    _name:"Guest",
    get user_name(){
        return this._name;
    }
};

let userProxy = new Proxy(user,{
    get(target,prop,receiver){
        return target[prop];
    }
});

let admin = {
    __proto__:userProxy,
    _name:"Admin"
};

console.log(admin.user_name)