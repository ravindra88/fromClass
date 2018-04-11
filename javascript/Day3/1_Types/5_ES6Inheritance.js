class Vehicle {
    constructor(m = "Honda") {
        this.make = m;
    }

    start() {
        return this.make + ", engine started....";
    }
}

class FourWheeler extends Vehicle{
    constructor(mk = "Honda", md = "Civic") {
        super(mk);
        this.model = md;
    }

    start() {
        return super.start() + ", model is " + this.model;
    }
}

var v = new FourWheeler("Ford", "Mustang");
console.log(v.start());