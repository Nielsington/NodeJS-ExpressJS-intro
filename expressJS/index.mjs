import express from 'express';
import cors from 'cors';
import path from 'path';
import consolidate from 'consolidate';

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

app.engine('html', consolidate.mustache);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/client', 'index.html'));
});

app.get('/about', (req, res) => {
    res.render(path.join(__dirname, '/client', '/about', 'index.html'));
});

app.get('/blog', (req, res) => {
    res.render(path.join(__dirname, '/client', '/blog', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.render(path.join(__dirname, '/client', '/contact', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))