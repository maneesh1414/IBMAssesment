const http = require('http');
const fs = require('fs');
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/') {

        fs.readFile("./index.html", (err, page) => {
            if(err) {
                res.writeHead(404);
                res.write("Contents you are looking for are Not Found");
                console.log(err);
            } else {
                res.writeHead(200, { 'Content-Type' : 'text/html'});
                res.write(page);
            }
            res.end();
        })
    }
});

server.listen(port);