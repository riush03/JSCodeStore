class Car{
    constructor(model)
    {
        this.model = model;
        this.color = "Silver";
        this.year = "2022";
    }

    getCarInfo()
    {
        return `${this.model} ${this.year}`;
    }
}

let denis_car = new Car('Tesla');
denis_car.year = '2024';
console.log(denis_car.getCarInfo())