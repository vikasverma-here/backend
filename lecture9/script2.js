// example two of event loop 



const fs = require("fs");

const a = 100;

setImmediate(() => {
    console.log("setImmediate");
});

Promise.resolve().then(() => {
    console.log("Promise");
});

fs.readFile("./file.txt", "utf8", () => {
    console.log("file reading cb");
});

setTimeout(() => {
    console.log("time expired");
}, 0);

process.nextTick(() => {
    console.log("process.nextTick");
});

function name() {
    console.log("a=", a);
}
name();

console.log("last line of the file");
