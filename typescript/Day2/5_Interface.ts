// let area = function (rect: { h: number, w?: number }) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w
// }

// var s1 = { h: 10, w: 20 };
// console.log(area(s1));

// var s2 = { h: 10 };
// console.log(area(s2));

// interface Rectangle {
//     h: number;
//     w?: number;
// }

// let area = function (rect: Rectangle) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w
// }

// var s1: Rectangle = { h: 10, w: 20 };
// console.log(area(s1));

// var s2: Rectangle = { h: 10 };
// console.log(area(s2));

interface IPerson {
    name: string;
    age: number;
    kids: number;
    greet: (msg: string) => string;
}

// class Person implements IPerson {
//     name: string;
//     age: number;
//     kids: number;

//     greet(msg: string): string {
//         return "Hello";
//     }
// }

var p1: IPerson = { 
    name: "Manish", 
    age: 34, 
    kids: 1, 
    greet: function (m) { return "Hello"; } 
};

var p1: IPerson = { 
    name: "Abhijeet", 
    age: 34, 
    kids: 1, 
    greet: function (m) { return "Hi"; } 
};