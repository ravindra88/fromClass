import { IPoint1, Point1 } from './12_PointModule.js';
// import * as $ from 'jquery';

let pointObj: IPoint1 = new Point1(2, 3);
console.log(pointObj.getDistance());

$(document).ready(function () {
    $("#hOne").text(pointObj.getDistance());
});