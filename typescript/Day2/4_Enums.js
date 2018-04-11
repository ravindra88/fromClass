// Dev 1
var Mode;
(function (Mode) {
    Mode[Mode["Read"] = 0] = "Read";
    Mode[Mode["Write"] = 1] = "Write";
    Mode[Mode["RW"] = 2] = "RW";
})(Mode || (Mode = {}));
function Open(mode) {
    console.log("File Opened, in mode: ", mode);
}
// var mode = {}
// Dev 2
Open(Mode.Read);
Open(Mode.Write);
Open(Mode.RW);
// Open("Magic Value"); 
