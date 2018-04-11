// class Queue {
//     private data: number[] = [];
//     push(d: number) {
//         this.data.push(d);
//     }
//     pop(): number {
//         return this.data.shift();
//     }
// }
// let q1=new Queue();
// q1.push(1);
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (d) {
        this.data.push(d);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var q1 = new Queue();
q1.push(1);
console.log(q1.pop().toFixed());
var q2 = new Queue();
q2.push("abc");
console.log(q2.pop().toUpperCase());
function GetLength(arg) {
    return arg.length;
}
GetLength("Manish");
GetLength(["Manish", "Ram", "Hello"]);
// GetLength<number>(10); 
