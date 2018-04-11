// function SayHello(name: string): void {
//     console.log("Hello, ", name);
// }

// SayHello();
// SayHello("Manish");
// SayHello("Manish","Sharma");


//Optional Parameters
// function SayHello(fname: string, lname?:string): void {
//     console.log("Hello, ", fname, lname);
// }

// SayHello("Manish","Sharma");
// SayHello("Manish");

// function addition(a?: number, b?: number) {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }

//Default Parameters
function addition(a = 0, b = 0) {
    return a + b;
}

console.log(addition(2, 3));
console.log(addition(2));
console.log(addition());
