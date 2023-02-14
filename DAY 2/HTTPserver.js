const http = require('http');
const fs = require('fs');
const path  = require('path');
const server = http.createServer();

server.on('request', (req, res) => {

    if (req.url === '/'){

        fs.readFile(path.join(__dirname, '/client', 'index.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(202, {'Content-Type': 'text/html'});
            
            res.write(data);
            res.end();
        });

    } // else if (req.url === '/about'){
    //     filePath = path.join(__dirname, '/client', '/about', 'index.html'); 
    // } else if (req.url === '/blog'){
    //     filePath = path.join(__dirname, '/client', '/blog', 'index.html'); 
    // } else if (req.url === '/contact'){
    //     filePath = path.join(__dirname, '/client', '/contact', 'index.html'); 
    // }
    
});

server.listen(3000, () => {
    console.log('Server started on http://127.0.0.1:3000');
});