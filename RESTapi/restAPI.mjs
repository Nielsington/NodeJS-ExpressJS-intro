import {dishes} from './listOfDishes.mjs';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config({path: './secureKey.env'});

const key = process.env.key;
const app = express();
const port = 3000;
const ip = 'http://localhost:';

app.get('/info', (req, res) => {
    res.send("In the url, after the '/', you have to enter your key. Then enter the dish name. All required info will be loaded on the page so you can make the dish!");
});

app.get('/', (req, res) => {
    if (req.url === '/'){
        res.send('Please enter your key in the URL!')
    }
})

app.get('/:key', (req, res, next) => {
    if (req.params.key !== key) {
        res.sendStatus(401);
    } else if (req.params.key === key){
        next();
    }
}, (req, res) => {
    res.send(dishes);
});

app.get('/:key/WontonSoup', (req, res) => {
    res.send(dishes[0]);
});

app.get('/:key/BelgianPancakes', (req, res) => {
    res.send(dishes[1]);
});

app.get('/:key/Spaghetti', (req, res) => {
    res.send(dishes[2]);
});

app.get('/:key/Cake', (req, res) => {
    res.send(dishes[3]);
});

app.get('/:key/Macaroni', (req, res) => {
    res.send(dishes[4]);
});

app.listen(port, (req, res) => {
    console.log(`Server running on: ${ip}${port}`);
})