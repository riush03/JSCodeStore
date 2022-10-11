class Person{
    constructor(firstname,lastname,dateOfBirth)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
    }

    //adding properties to a clas using getter
    get age()
    {
        if(this.dateOfBirth instanceof Date)
        {
            //calculate the difference in years
            const today = new Date();
            let age = today.getFullYear() - this.dateOfBirth.getFullYear();

            //adjust if the bithday has not happened this year
            const monthDiff = today.getMonth() - this.dateOfBirth.getMonth();
            if(monthDiff <0 || (monthDiff == 0 && today.getDate() < this.dateOfBirth.getDate()))
            {
                age -= 1;
            }
            return age;
        }
    }

    swapNames()
    {
        [this.firstname,this.lastname] = [this.lastname,this.firstname];
    }
}

const student = new Person('Denis','Muriungi',new Date(2000,03,08));
student.swapNames();
console.log(student);
console.log(student.age);