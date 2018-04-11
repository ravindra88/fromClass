// Function Declaration (Hoisted)
// Hello();

function Hello() {
    console.log("Welcome to JS World");
}

// Function Expression (Not Hoisted)
var f = function () {
    console.log("Welcome to JS World");
};

// f();

// console.log(f);
// console.log(typeof f);


// Function Constructor

// var f1 = new Function('console.log("Welcome to JS World");');
// f1();

function clickHandler(e) {
    console.log("Click Handled - Named Function...");
}

document.getElementById("b1").addEventListener('click', clickHandler);

document.getElementById("b2").addEventListener('click', function (e) {
    console.log("Click Handler - Anonymous Function...")
});

document.getElementById("b3").addEventListener('click', (e) => {
    console.log("Click Handler - Arrow Function...")
});

function Add1(x, y) {
    return x + y;
}

var Add2 = function (x, y) {
    return x + y;
}

var Add3 = (x, y) => x + y;

var Add4 = (x, y) => { return x + y; };

console.log(Add1(2, 3));
console.log(Add2(2, 3));
console.log(Add3(2, 3));
console.log(Add4(2, 3));
