const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            render(req, res, "index.html");
            break;
        case "/about":
            render(req, res, "about.html");
            break;
        case "/contact-me":
            render(req, res, "contact-me.html");
            break;
        default:
            error(res);
            break;
    }
});

const PORT = process.env.PORT || 8080;
const PUBLIC = "../public/";

function render(req, res, file) {
    fs.readFile(path.join(__dirname, PUBLIC, file), (err, content) => {
        if (err) {
            error(res);
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
    });
}

function error(res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Error</h1>");
}

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
