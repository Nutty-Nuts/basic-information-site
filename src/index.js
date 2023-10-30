const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    render(req, res, "/", "index.html");
    render(req, res, "/about", "about.html");
    render(req, res, "/contact", "contact-me.html");
});

const PORT = process.env.PORT || 8080;
const PUBLIC = "../public/";

function render(req, res, url, file) {
    if (req.url === url) {
        fs.readFile(path.join(__dirname, PUBLIC, file), (err, content) => {
            if (err) {
                error(req, res);
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content);
        });
    }
}

function error(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Error</h1>");
}

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
