const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Salut din serverul Node.js!');
});

app.listen(port, () => {
  console.log(`Serverul ruleaza pe portul ${port}`);
});
