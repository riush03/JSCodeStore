//key indexed correction
const items = new Map();

items.set('Smartphones',{name:'Nokia',price:21000});
items.set('Laptops',{name:'hp probook',price:40000});
items.set('Computers',{name:'Lenovo',price:50000});

//check for item using the item code
console.log(items.has('Smartphones'));

//retrieve an item
const item = items.get('Laptops');
if(typeof item !== 'undefined')
{
    console.log(item.price);

}

items.delete('Computers');
console.log(items.size);