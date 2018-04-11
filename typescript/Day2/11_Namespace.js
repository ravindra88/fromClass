var Synechron;
(function (Synechron) {
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.getDistance = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        return Point;
    }());
    Synechron.Point = Point;
})(Synechron || (Synechron = {}));
var Usage;
(function (Usage) {
    var pointObj = new Synechron.Point(2, 3);
    console.log(pointObj.getDistance());
})(Usage || (Usage = {}));
