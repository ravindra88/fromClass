// Case 1
// import sqr from './lib';
// console.log(sqr(2));

// Case 2
// import { square, Check } from './lib';
// console.log(square(2));
// Check();

// import * as lib from './lib';
// console.log(lib.square(2));
// lib.Check();

// Case 3
import sqr, { Check } from './lib';
console.log(sqr(2));
Check();

// rollup main.js --output.format iife --output.file bundle.js