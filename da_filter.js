const items = [
    {name:'Cup',price:50},
    {name:'Bag',price:100},
    {name:'Wires',price:150},
    {name:'plates',price:60},
    {name:'sweater',price:250},
    {name:'Bowl',price:80}
]

//filter array method
const filteredItems = items.filter((item)=>{
    return item.price <=100
})

console.log(items)
console.log(filteredItems);