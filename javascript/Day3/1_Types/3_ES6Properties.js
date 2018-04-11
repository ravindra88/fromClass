class Employee {
    constructor(fname) {
        this._fname = fname;
    }

    get firstname() {
        return this._fname;
    }

    set firstname(n) {
        this._fname = n;
    }
}

var e1 = new Employee("Subodh");
Object.freeze(e1);

console.log(e1.firstname);
e1.firstname = "Manish";
console.log(e1.firstname);

e1.lastname = "Sharma";
console.log(e1.lastname);