const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content);
        });
    }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
