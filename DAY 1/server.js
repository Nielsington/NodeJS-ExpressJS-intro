const path = require('path');
const fs = require('fs');
const os = require('os');

fs.mkdir(path.join(__dirname, '/client'), err => {
    if (err) throw err;
});

fs.writeFile(
    path.join(__dirname, '/client', 'index.html'), '<link rel="stylesheet" href="./style.css">' + '<h1>Homepage</h1>', err => {
        if (err) throw err;
});

fs.writeFile(
    path.join(__dirname, '/client', 'style.css'), 'body {background-color: red;}' , err => {
    if (err) throw err;
});

fs.mkdir(path.join(__dirname, '/client', '/contact'), err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/contact', 'index.html'), '<link rel="stylesheet" href="./style.css">' + '<h1>Contact</h1>', err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/contact', 'style.css'), 'body {background-color: orange;}' , err => {
    if (err) throw err;
});

fs.mkdir(path.join(__dirname, '/client', '/about'), err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/about', 'index.html'), '<link rel="stylesheet" href="./style.css">' + '<h1>About</h1>' , err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/about', 'style.css'), 'body {background-color: green;}' , err => {
    if (err) throw err;
});

fs.mkdir(path.join(__dirname, '/client', '/blog'), err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/blog', 'index.html'), '<link rel="stylesheet" href="./style.css">' +  '<h1>Blog</h1>', err => {
    if (err) throw err;
});

fs.writeFile(path.join(__dirname, '/client', '/blog', 'style.css'), 'body {background-color: yellow;}' , err => {
    if (err) throw err;
});

fs.writeFile(
    path.join(__dirname, 'Info.txt'), 'This is being run on a ' + os.platform() + ' computer!', err => {
        if (err) throw err;
    }
);

