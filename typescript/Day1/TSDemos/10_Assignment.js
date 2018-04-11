// function Reverse(x: string): string[];
// function Reverse(arr: string[]): string[];
function Reverse(strOrarr) {
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
var myData;
myData = 10;
myData = "Manish";
