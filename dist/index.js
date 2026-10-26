"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const port = 3000;
const addr = "localhost";
const server = (0, node_http_1.createServer)((req, res) => {
    if (req.url === "health") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ status: "ok" }));
    }
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<h1>Hello there</h1>`);
});
server.listen(port, addr, () => {
    console.log(`Started server on http://${addr}:${port}`);
});
