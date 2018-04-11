// var wm = new WeakMap();

// var o1 = {};
// var o2 = window;

// wm.set(o1, "Hello There");
// wm.set(o2, "This is Window");

// for (const i of wm) {
//     console.log(i);
// }

// console.log(wm.get(o2));

var map = new Map();
var wmap = new WeakMap();

(function(){
    var a = { x: 1 };
    var b = { y: 2 };
    
    map.set(a, 1);
    wmap.set(b, 2);
})();

// var a = { x: 1 };
// var b = { y: 2 };

// map.set(a, 1);
// wmap.set(b, 2);