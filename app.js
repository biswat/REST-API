import express from 'express';
import Mongoose from 'mongoose';
const app = express();
const PORT = 3000;

const url = ''

app.get('/', (req, res) => {
  res.send('<h1>Hello! Its working!.</h1>');
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
