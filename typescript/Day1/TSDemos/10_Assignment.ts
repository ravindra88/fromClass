// function Reverse(x: string): string[];
// function Reverse(arr: string[]): string[];

// function Reverse(): string[] {
//     function M1(x: string): string[] {
//         return x.split("").reverse();
//     }

//     function M2(arr: string[]): string[] {
//         return arr.slice().reverse();
//     }

//     if (typeof arguments[0] == "string")
//         return M1(arguments[0]);
//     else
//         return M2(arguments[0]);
// }

// function Reverse(x: string): string[];
// function Reverse(arr: string[]): string[];

// function Reverse(): string[] {
//     if (typeof arguments[0] == "string")
//         return arguments[0].split("").reverse();
//     else
//         return arguments[0].slice().reverse();
// }

// function Reverse(x: string): string[];
// function Reverse(arr: string[]): string[];

// function Reverse(strOrarr: any): string[] {
//     if (typeof strOrarr == "string")
//         return strOrarr.split("").reverse();
//     else
//         return strOrarr.slice().reverse();
// }

// function Reverse(x: string): string[];
// function Reverse(arr: string[]): string[];

// function Reverse(strOrarr: any): string[] {
//     if (typeof strOrarr == "string")
//         return strOrarr.split("").reverse();
//     else
//         return (<string[]>strOrarr).slice().reverse();
// }

function Reverse(x: string): string[];
function Reverse(arr: string[]): string[];

function Reverse(strOrarr: (string | string[])): string[] {
    if (typeof strOrarr == "string")
        return strOrarr.split("").reverse();
    else
        return strOrarr.slice().reverse();
}

console.log(Reverse("Manish"));
console.log(Reverse(["Manish", "Hello", "Ram"]));

//Type Assertion
// var d:any=10;
// (<number>d).toExponential();

//Type Guards
var myData: (number | string | boolean);
myData = 10;
myData = "Manish";