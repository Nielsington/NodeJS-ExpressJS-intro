const http = require('http');
const fs = require('fs');
const path  = require('path');
const server = http.createServer();

server.on('request', (req, res) => {

    if (req.url === '/'){
        fs.writeFile(path.join(__dirname, '/client', 'index.html'), '<head><style>body{background-color: blue}</style><title>Homepage</title></head><body><h1>Homepage</h1></body>', err => {
            if (err) throw err;
        });

        fs.readFile(path.join(__dirname, '/client', 'index.html'), (err, data) => {
            if (err){
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404: page not found' + err);
            } else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
            }
        });

    } else if (req.url === '/about'){
        fs.writeFile(path.join(__dirname, '/client', '/about', 'index.html'), '<head><style>body{background-color: red}</style><title>About</title></head><body><h1>About</h1></body>', err => {
            if (err) throw err;
        });

        fs.readFile(path.join(__dirname, '/client', '/about', 'index.html'), (err, data) => {
            if (err){
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404: page not found' + err);
            } else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
            }
        });

    } else if (req.url === '/blog'){
        fs.writeFile(path.join(__dirname, '/client', '/blog', 'index.html'), '<head><style>body{background-color: green}</style><title>Blog</title></head><body><h1>Blog</h1></body>', err => {
            if (err) throw err;
        });

        fs.readFile(path.join(__dirname, '/client', '/blog', 'index.html'), (err, data) => {
            if (err){
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404: page not found' + err);
            } else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
            }
        }); 

    } else if (req.url === '/contact'){
        fs.writeFile(path.join(__dirname, '/client', '/contact', 'index.html'), '<head><style>body{background-color: orange}</style><title>Contact</title></head><body><h1>Contact</h1></body>', err => {
            if (err) throw err;
        });

        fs.readFile(path.join(__dirname, '/client', '/contact', 'index.html'), (err, data) => {
            if (err){
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404: page not found' + err);
            } else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
            }
        }); 
        
    }else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404: page not found');
    }
    
}
);

server.listen(3000, () => {
    console.log('Server started on http://127.0.0.1:3000');
});