// var COLOR_RED = 'RED';
// var COLOR_ORANGE = 'ORANGE';
// var COLOR_YELLOW = 'YELLOW';
// var COLOR_GREEN = 'GREEN';
// var COLOR_BLUE = 'BLUE';
// var COLOR_VIOLET = 'VIOLET';

var COLOR_RED = Symbol('RED');
var COLOR_ORANGE = Symbol('ORANGE');
var COLOR_YELLOW = Symbol('YELLOW');
var COLOR_GREEN = Symbol('GREEN');
var COLOR_BLUE = Symbol('BLUE');
var COLOR_VIOLET = Symbol('VIOLET');

function get(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE;
        case COLOR_YELLOW:
            return COLOR_VIOLET;
        case COLOR_GREEN:
            return COLOR_RED;
        case COLOR_BLUE:
            return COLOR_ORANGE;
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            return ('Unknown color');
    }
}

console.log(get(COLOR_RED));
var MOOD_BLUE = Symbol('BLUE');
console.log(get(MOOD_BLUE));

const My_KEY = Symbol();

const obj = {
    [My_KEY]: 123,
    name: "Manish"
}

console.log(obj[My_KEY]);

// const obj = {};
// obj[My_KEY] = 123;