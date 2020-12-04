const http = require('http');
const ctrl = require('./controller');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let parts = req.url.replace('http://', '').split('/');
    console.log(req.url);
    if (parts.length > 1) {
        let c = new ctrl.HomeController();
        res.end(c.index().render());
        
    }

    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});