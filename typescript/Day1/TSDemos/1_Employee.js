var Employee = /** @class */ (function () {
    function Employee(n) {
        this.name = n;
    }
    Employee.prototype.setName = function (n) {
        this.name = n;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Abhijeet");
console.log(e1.getName());
var e2 = new Employee("Subodh");
console.log(e2.getName());
e2.setName("Ramakant");
console.log(e2.getName());
