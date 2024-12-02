const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const myUrl = url.parse(req.url);
  const log = `${req.url} : New Req\n`;
  fs.appendFile("request.log", log, (err) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page !");
        break;
      case "/about":
        res.end("About Page");
        break;
      default:
        res.end("404 Not Found!");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started !"));
