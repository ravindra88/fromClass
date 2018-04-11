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

function Add1(a: number, b: number) {
    return a + b;
}

var Add2 = function (a: number, b: number) {
    return a + b;
}

var Hello: () => void;
Hello = function () {

}

var Add3: (x: number, y: number) => number;
Add3 = function (a: number, b: number) {
    return a + b;
}

// var d:number;
// d=10;

var Add4: (x: number, y: number) => number;
Add4 = function (a, b) {
    return a + b;
}

var Add5: (x: number, y: number) => number;
Add5 = (a, b) => a + b;

var Add6: (x: number, y: number) => number;
Add6 = (a, b) => { return a + b };


function Display(cb: (x: number) => number) {
    console.log(cb(2));
}

function Inc(x: number) {
    return x + 10;
}
Display(Inc);

Display(function (x) { return x + 10; });

Display(x=>x+10);