// function Show() {
//     console.log("Show Complete...");
// }
// var result = Show();
// console.log(result);
// var r1:void;
//Hoisting
// Show();
// function Show(): void {
//     console.log("Show Complete...");
// }
// var Show1 = function () {
//     console.log("Show Complete...");
// }
// Show1();
function Add1(a, b) {
    return a + b;
}
var Add2 = function (a, b) {
    return a + b;
};
var Hello;
Hello = function () {
};
var Add3;
Add3 = function (a, b) {
    return a + b;
};
// var d:number;
// d=10;
var Add4;
Add4 = function (a, b) {
    return a + b;
};
var Add5;
Add5 = function (a, b) { return a + b; };
var Add6;
Add6 = function (a, b) { return a + b; };
function Display(cb) {
    console.log(cb(2));
}
function Inc(x) {
    return x + 10;
}
Display(Inc);
Display(function (x) { return x + 10; });
Display(function (x) { return x + 10; });
