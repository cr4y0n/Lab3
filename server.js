const response = require('express');
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('server: running');
});

//G

var addAmount = 0;

app.get('/api/random', (req, res) => {
  res.send({ 'number': Math.floor(Math.random() * 1024) });
});

app.get('/api/custom_random/:num', (req, res) => {
  res.send({ 'number': Math.floor(Math.random() * req.params.num + 1) });
});

app.get('/api/counter/add', (req, res) => {
  addAmount++;
  res.send({ message: 'added 1 to counter'});
});

app.get('/api/counter/get', (req, res) => {
  res.send({ 'currentAmount': addAmount });
});

app.post('/api/counter/vowels', (req, res) => {
  const word = req.query.word;
  var vowels = 0;
  for(i = 0; i < word.length; i++) {
    if(word[i].match(/[aeiouyåäö]/gi) ) {
      vowels++;
    }
  };
  res.send({ 'amountOfVowels': vowels });
});

//VG

app.post('/api/counter/adding', (req, res) => {
  res.send({ 'sum': Number(req.query.term1) + Number(req.query.term2) });
});

app.post('/api/counter/subtracting', (req, res) => {
  res.send({ 'difference': Number(req.query.term1) - Number(req.query.term2) });
});

app.get('/api/greetings', (req, res) => {
  res.send({ message: 'Have a great summer!' });
});