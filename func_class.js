function Car(model)
{
    this.model = model;
    this.color = "grey";
    this.year = "2022";

    this.getInfo = function()
    {
        return this.model + " "+this.year;
    };
}

//Instantiate the object using the car constructor
let new_car = new Car("Tesla");
new_car.year = "2024";
console.log(new_car.getInfo())