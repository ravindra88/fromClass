var Manager = /** @class */ (function () {
    function Manager() {
        this.name = "Manager";
    }
    return Manager;
}());
var Developer = /** @class */ (function () {
    function Developer() {
        this.name = "Developer";
    }
    return Developer;
}());
var Tester = /** @class */ (function () {
    function Tester() {
        this.name = "Tester";
    }
    return Tester;
}());
var EmployeeFactory = /** @class */ (function () {
    function EmployeeFactory() {
    }
    EmployeeFactory.prototype.create = function (arg) {
        var emp = new arg();
        return emp;
    };
    return EmployeeFactory;
}());
var factory = new EmployeeFactory();
var e1 = factory.create(Manager);
console.log(e1);
var e2 = factory.create(Developer);
console.log(e2);
var e3 = factory.create(Tester);
console.log(e3);
