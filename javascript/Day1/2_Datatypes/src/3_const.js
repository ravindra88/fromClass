// let x;
// x = 10;

const env = "dev";

if (true) {
    const env = "prod";
    console.log("Inside of block, ", env);
}

console.log(env);