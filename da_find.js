const items = [
    {name:'Cup',price:50},
    {name:'Bag',price:100},
    {name:'Wires',price:150},
    {name:'plates',price:60},
    {name:'sweater',price:250},
    {name:'Bowl',price:80}
]

//find array method
const foundItems = items.find((item)=>{
    return item.name === 'Bowl'
})

console.log(foundItems);