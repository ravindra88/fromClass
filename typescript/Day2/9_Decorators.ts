function CityDecorator<T extends { new(...args: any[]): {} }>(type: T) {
    return class extends type {
        city = "Pune";
    }
}

@CityDecorator
class MyPerson {
    name: string;
    age: number;

    constructor(n = "NA", a = 0) {
        this.name = n;
        this.age = a;
    }
}

console.log(new MyPerson("Ram", 35));