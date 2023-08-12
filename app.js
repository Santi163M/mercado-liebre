const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.post('/register', (req, res) => {
    res.redirect('/');
});

app.post('/login', (req, res) => {
    res.redirect('/');
});

app.use(express.static('public'));

app.listen(8000, () => console.log('Servidor iniciado en el puerto 8000'));