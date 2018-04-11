//Implicitly Typed
var data = 10;
// data = "ABC";

var data1;
data1 = 10;
data1 = "ABC";

//Explicitly Typed
var age: number;
// age="BA";


function add(x: number, y: number) {
    return x + y;
}

console.log(add(2, 3));
// console.log(add(2, "ABC"));

function sub(x:any, y: number) {
    return x - y;
}