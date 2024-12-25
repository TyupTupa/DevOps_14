const express = require('express');
const app = express();
app.set('view engine', 'ejs');

function addNumbers(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.render('index', { result: null });
});

app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a) || 0;
  const b = parseFloat(req.query.b) || 0;
  const result = addNumbers(a, b);
  res.render('index', { result });
});

module.exports =  {app, addNumbers}
