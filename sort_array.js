const people = [
    {firstname:'Denis',lastname:'Muriungi',Age:21},
    {firstname:'Christine',lastname:'Wangui',Age:19},
    {firstname:'Thomson',lastname:'Mutei',Age:20},
    {firstname:'Sharon',lastname:'Pubito',Age:21}
];

people.sort(function(a,b) {
    if(a.Age < b.Age)
    {
        return -1;
    }else if(a.Age > b.Age)
    {
        return 1;
    }else
    {
        return 0;
    }
});

console.log(people);