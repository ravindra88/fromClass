"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _12_PointModule_js_1 = require("./12_PointModule.js");
// import * as $ from 'jquery';
var pointObj = new _12_PointModule_js_1.Point1(2, 3);
console.log(pointObj.getDistance());
$(document).ready(function () {
    $("#hOne").text(pointObj.getDistance());
});
