//hello world

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('hello world');
  res.sendStatus(200);
});


app.listen(3000, () => {
    console.log('express is up');
});
