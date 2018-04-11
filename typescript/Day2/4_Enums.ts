// Dev 1
enum Mode { Read, Write, RW }

function Open(mode: Mode) {
    console.log("File Opened, in mode: ", mode);
}

// var mode = {}

// Dev 2
Open(Mode.Read);
Open(Mode.Write);
Open(Mode.RW);
// Open("Magic Value");