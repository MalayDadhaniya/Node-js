const fs = require("fs");
const http = require("http");
const url = require("url");

const myServer = http.createServer((req, res)=>{
    if(req.url === "/favicon.ico"){ return res.end()}
    const log = `${Date.now()} ${req.url} -- New Req!\n`;
    const myUrl = url.parse(req.url, true);
    fs.appendFile("log.txt", log, (err,data)=>{
        console.log(myUrl);
        switch(myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.myName;
                res.end(`Hi, ${username}`);
                break;
            default:
                res.end("404 Error!");
        }
    });
});

myServer.listen(8000, ()=>console.log("Server Started!"));


































// const fs = require("fs");
// const http = require("http");

// const myServer =  http.createServer((req, res) => {
//     const log = `${Date.now()} ${req.url} -- New Req!\n`;
//     fs.appendFile("./log.txt",log, (err, data)=>{
//         switch(req.url){
//             case "/":
//                 res.end("Home Page!");
//                 break;
//             case "/about":
//                 res.end("About Page!");
//                 break;
//             default:
//                 res.end("<h1>404 Error!</h1>")
//         }
//     });
// });

// myServer.listen(5000, () => console.log("Server Started!"));