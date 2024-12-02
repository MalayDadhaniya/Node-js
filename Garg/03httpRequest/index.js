const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : New Req.\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello From Serevr");
  });
  res.end("Hello");
});

myServer.listen(8000, () => console.log("Server Started"));
