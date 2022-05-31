const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); 
const app = express();
const port = 3000;


app.use(morgan('combined'))

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('path :' + path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})


var b =2;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}11`)
})


