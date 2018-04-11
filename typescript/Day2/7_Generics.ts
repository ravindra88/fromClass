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

class Queue<T> {
    private data: T[] = [];

    push(d: T) {
        this.data.push(d);
    }

    pop(): T {
        return this.data.shift();
    }
}

let q1 = new Queue<number>();
q1.push(1);
console.log(q1.pop().toFixed());

let q2 = new Queue<string>();
q2.push("abc");
console.log(q2.pop().toUpperCase());

interface ILength {
    length: number;
}

function GetLength<T extends ILength>(arg: T) {
    return arg.length;
}

GetLength<string>("Manish");
GetLength<Array<string>>(["Manish", "Ram", "Hello"]);
// GetLength<number>(10);