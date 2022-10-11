/*************** dealing with objects */

const { def } = require("@vue/shared");
const { config } = require("process");

//set properties
newObject.someKey = "Hello world";

//get properties
const value = newObject.someKey;

//declaring objects using square bracket syntax
newObject['some_key'] = "Hello world";
//get properties
const value_s = newObject['some_key'];

//using Object.defineProperty

//set properties
Object.defineProperty(newObject,'someKey',{
    value: "For more control of the property behaviour",
    writable:true,
    enumerable:true,
    configurable:true,
});

//shorthand of the above code
const defineProps = (obj,key,val)=>{
    const config = {
        val:val,
        writable:true,
        enumerable:true,
        configurable:true,
    };
    Object.defineProperty(obj,key,config);
};

//to use when we create a new empty "person" object
const person = Object.create(Object.prototype);
//populate the object with properties
defineProps(person,'Car','Delorean');
defineProps(person,'dateOfBirth','1981');
defineProps(person,'hasBeard',false);

//Object.defineProperties
//set properties
Object.defineProperties(someObject,{
    firstKey:{
        value:'Hello world',
        writable:true,
    },
    secondKey:{
        value:'Another one',
        writable:false,
    },
});