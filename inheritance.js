//class inheritance in javascript
class Shape{
    getArea()
    {
        return null
    }
}

class Triangle extends Shape{
    constructor(base ,height)
    {
        super();
        this.base = base;
        this.height = height;
    }

    getArea()
    {
        return this.base*this.height/2;
    }
}

class Circle extends Shape{
    constructor(radius)
    {
        super();
        this.radius = radius;
    }

    getArea()
    {
        return Math.PI*this.radius**2;
    }
}

class Square extends Shape{
    constructor(length)
    {
        super();
        this.length = length;
    }
    getArea()
    {
        return this.length**2;
    }
}
const shapes = [new Triangle(5,7),new Circle(9),new Square(6)];
//sort them by area from the largest to the smallest
shapes.sort((a,b) => a.getArea()-b.getArea());
console.log(shapes);