var calculator = (function () {
    function addition(x, y) {
        return x + y;
    }
    function subtract(x, y) {
        return x - y;
    }
    function multiply(x, y) {
        return x * y;
    }
    function divide(x, y) {
        return x / y;
    }
    return {
        addt: addition,
        subt: subtract,
        mult: multiply
    };
})();
// var addt = calculator.addt;
// var subt = calculator.subt;
//Object Destructuring
// var { addt, subt } = calculator;
// console.log(addt(2,3));
// console.log(subt(2,3));
// console.log(calculator.addt(3,4));
var numArr = [10, 20, 30, 40];
// var x = numArr[0];
// var [x,,y] = numArr;
// console.log(x,y);
var x = numArr[0], y = numArr[2];
console.log("Before ", x, y);
var _a = [x, y], y = _a[0], x = _a[1];
console.log("After ", x, y);
