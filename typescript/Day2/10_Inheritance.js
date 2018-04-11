var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(i, m) {
        if (m === void 0) { m = "NA"; }
        this._id = i;
        this._make = m;
    }
    Vehicle.prototype.start = function () {
        return "Vehcile with id: " + this._id + ", with make as: " + this._make + ", started...";
    };
    return Vehicle;
}());
// class FourWheeler extends Vehicle implements IPerson, IArguments {
var FourWheeler = /** @class */ (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler(i, m, md) {
        var _this = _super.call(this, i) || this;
        _this._make = m;
        _this._model = md;
        return _this;
    }
    FourWheeler.prototype.start = function () {
        return _super.prototype.start.call(this) + ", model is: " + this._model;
    };
    FourWheeler.prototype.move = function () {
        console.log("Moving like a car");
    };
    return FourWheeler;
}(Vehicle));
var v = new FourWheeler(1, "Ford", "Mustang");
console.log(v.start());
v.move();
