abstract class Vehicle {
    private _id: number;
    protected _make: string;

    constructor(i: number, m = "NA") {
        this._id = i;
        this._make = m;
    }

    start() {
        return "Vehcile with id: " + this._id + ", with make as: " + this._make + ", started...";
    }

    abstract move(): void;
}

// class FourWheeler extends Vehicle implements IPerson, IArguments {
 class FourWheeler extends Vehicle {
    private _model: string;

    constructor(i: number, m: string, md: string) {
        super(i);
        this._make = m;
        this._model = md;
    }

    start() {
        return super.start() + ", model is: " + this._model;
    }

    move() {
        console.log("Moving like a car");
    }
}

var v = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
v.move();