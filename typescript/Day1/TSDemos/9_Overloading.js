function MyHello() {
    function M1() {
        console.log("Hello World");
    }
    function M2(name) {
        console.log("Hello, ", name);
    }
    if (arguments.length == 0)
        M1();
    else if (arguments.length == 1)
        M2(arguments[0]);
    else
        throw "No Implementation Found...";
}
MyHello();
MyHello("Manish");
