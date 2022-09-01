const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    {
        fs.readFile("vegetables.json", "utf-8", (error, data) => {
            res.end(data);
        });
    }
}).listen(8000);
