const fs = require("fs");

const result = fs.readFileSync("./test.txt", "utf-8");

console.log(result);
