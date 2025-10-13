const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome yo our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("About page");
    return;
  }
  res.end(`
    <h1>Oops!</h1
    <p>We can't seem to find</p>
    `);
});

server.listen(5000);
