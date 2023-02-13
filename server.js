const path = require('path');
const fs = require('fs');

fs.mkdir(path.join(__dirname, '/client'), err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', 'index.html'), '' , err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', 'style.css'), '' , err => {
    if (err) throw err;
});

fs.mkdir(path.join(__dirname, '/client', '/contact'), err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/contact', 'index.html'), '' , err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/contact', 'style.css'), '' , err => {
    if (err) throw err;
});

fs.mkdir(path.join(__dirname, '/client', '/about'), err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/about', 'index.html'), '' , err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/about', 'style.css'), '' , err => {
    if (err) throw err;
});

fs.mkdir(path.join(__dirname, '/client', '/blog'), err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/blog', 'index.html'), '' , err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/blog', 'style.css'), '' , err => {
    if (err) throw err;
});

