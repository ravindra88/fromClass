// var numArr = [10,20,30,40];
// var numArr = [10, "ABC", true];

// var numArr1:number[];
// var numArr2:Array<number>;

// var numArr = [10, 20, 30, 40, 43, 56, 71, 80, 90];
// var r = numArr.find(n => n % 2 == 1);
// console.log(r);

var numArr = [10, 20, 30, 40];

// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i]);    
// }

// for (let i in numArr) {
//     console.log(i + "\t" + numArr[i]);
// }

for (let i of numArr) {
    console.log(i);
}