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

console.log(person)