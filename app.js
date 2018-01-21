const express = require('express');
const app = express(); // creates instance of express application
const volleyball = require('volleyball');
app.use(volleyball);

app.use(function (req, res, next) {
    console.log('Request Type:', req.method);
    console.log('Request URL:', req.originalUrl);
    next();
})

app.get('/', (req, res) => res.send('Hello User this is Marco and Alex!'));
app.get('/news', (req, res) => res.send('News and Views!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

