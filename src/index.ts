import { createServer } from "node:http";

const server = createServer((req, res) => {
  if (req.url === "health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
  }

  res.writeHead(200, { "content-type": "text/html" });
  res.end(`<h1>Hello there</h1>`);
});

const port = 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`Started server on port ${port}`);
  console.log("This message was added in a new commit!");
});
