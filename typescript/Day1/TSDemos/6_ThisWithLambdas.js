// function Person(a: number) {
//     this.age = a;
//     this.growOld = function () {
//         console.log(this);
//         this.age += 1;
//     }
// }
// function Person(a: number) {
//     var self = this;
//     this.age = a;
//     this.growOld = function () {
//         console.log(this);
//         self.age += 1;
//     }
// }
function Person(a) {
    var _this = this;
    this.age = a;
    this.growOld = function () {
        _this.age += 1;
    };
}
var p = new Person(20);
setInterval(p.growOld, 1000);
// setInterval(p.growOld.bind(p), 1000);
setInterval(function () {
    console.log(p.age);
}, 1000);
// setInterval(function () {
//     p.growOld();
//     console.log(p.age);
// }, 1000); 
