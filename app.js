const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
})

app.use(express.static('public'))
console.log(path.resolve(__dirname, 'public'));

app.listen(3100, () => console.log('Servidor iniciado'))