interface IEmployee {
    id: number;
    name: string;
}

class Manager implements IEmployee {
    id: number;
    name: string;

    constructor() {
        this.name = "Manager";
    }
}

class Developer implements IEmployee {
    id: number;
    name: string;

    constructor() {
        this.name = "Developer";
    }
}

class Tester implements IEmployee {
    id: number;
    name: string;

    constructor() {
        this.name = "Tester";
    }
}

class EmployeeFactory<T extends IEmployee>{
    create(arg: { new(): T }): T {
        var emp = new arg();
        return emp;
    }
}

var factory = new EmployeeFactory<IEmployee>();

var e1 = factory.create(Manager);
console.log(e1);

var e2 = factory.create(Developer);
console.log(e2);

var e3 = factory.create(Tester);
console.log(e3);
