const express = require('express');
const app = express(); // creates instance of express application
const volleyball = require('volleyball');
app.use(volleyball);
const nunjucks = require('nunjucks');
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});
// // nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// // res.render( 'index', {title: 'Hall of Fame', people: people} );


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};


app.use(function (req, res, next) {
    console.log('Request Type:', req.method);
    console.log('Request URL:', req.originalUrl);
    next();
})

app.get('/', (req, res) => res.send('Hello User this is Marco and Alex!'));
app.get('/news', (req, res) => res.send('News and Views!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

