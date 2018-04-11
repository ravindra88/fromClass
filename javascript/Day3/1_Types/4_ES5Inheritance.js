function Vehicle(m) {
    this.make = m || "Honda";
}

Vehicle.prototype.start = function () {
    return this.make + ", engine started....";
}

function FourWheeler(mk, md) {
    Vehicle.call(this, mk);
    this.model = md || "Civic";
}

FourWheeler.prototype = Object.create(Vehicle.prototype);
FourWheeler.prototype.constructor = FourWheeler;

FourWheeler.prototype.start = function () {
    return Vehicle.prototype.start.call(this) + ", model is " + this.model;
}

var v = new FourWheeler("Ford", "Mustang");
console.log(v.start());