const products = require('./array');

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(3000, () => 
    console.log('servidor em execução')
)

app.post('/produto', (req, res) => {
    console.log(req.body)
})