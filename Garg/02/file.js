const fs = require("fs");
const os = require("os");

// console.log(os.cpus().length);

//sync...
// fs.writeFileSync("./text.txt","Hey There!");

//async...
// fs.writeFile("./text.txt","Hello World!", (err) => {});

//sync...
// const Result = fs.readFileSync("./contacts.txt","utf8");
// console.log("Result = "+Result);

// aysc...
// fs.readFile("./contacts.txt","utf-8",(err, result) => {
//     if(err){
//         console.log("Error "+err);
//     }else{
//         console.log("Result = "+result);
//     }
// });

// fs.appendFileSync("./contacts.txt",`hey There\n`);

// fs.cpSync("contacts.txt","./copy.txt");
// fs.unlinkSync("./contacts.txt");
fs.mkdirSync("./my_dir/a/b", {recursive:true});