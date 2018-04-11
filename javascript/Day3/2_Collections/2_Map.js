var myMap = new Map();

var strkey = 'the string';
var objkey = {};
var fnkey = function () { };

myMap.set(strkey, "This is value for the string key.");
myMap.set(objkey, "This is value for the object key.");
myMap.set(fnkey, "This is value for the function key.");

// console.log(myMap.size);

// for (const pair of myMap) {
//     console.log(pair)
// }

// for (const key of myMap.keys()) {
//     console.log(key)
// }

// for (const value of myMap.values()) {
//     console.log(value);
// }

// for (const [key, value] of myMap.entries()) {
//     console.log(key + ' = ' + value);
// }

for (const [key, value] of myMap) {
    console.log(key + ' = ' + value);
}
