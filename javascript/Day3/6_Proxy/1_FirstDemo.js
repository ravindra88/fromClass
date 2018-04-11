// let errorObj = {
//     code: 'E101',
//     msg: 'Just for Fun'
// };

// console.log(errorObj.code);
// console.log(errorObj.msg);
// console.log(errorObj.just);

let errorObj = {
    code: 'E101',
    msg: 'Just for Fun'
};

var handler = {
    get: function (target, key) {
        return key in target ? target[key] : 'Property not found..';
    }
};

let p = new Proxy(errorObj, handler);

console.log(p.code);
console.log(p.msg);
console.log(p.just);
