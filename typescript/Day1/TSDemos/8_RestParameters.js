// // Rest Parameters
// function SayHello(fname: string, ...args: any[]): void {
//     console.log("Hello, ", fname);
//     console.log(arguments);
//     console.log(args);
// }
// SayHello("Manish");
// SayHello("Manish", "Sharma");
// SayHello("Manish", "Sharma", "Pune");
// SayHello("Manish", "Sharma", "Pune", 411038);
function Calculate() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(sum);
}
// Calculate();
// Calculate(1, 2);
// Calculate(1, 2, 3, 4, 5, 6);
var arr = [10, 20, 30, 40, 50, 60];
// Calculate(...arr);  //Spread Operator
console.log(arr);
console.log.apply(console, arr);
