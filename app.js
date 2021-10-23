import express from 'express';
import Mongoose from 'mongoose';
const app = express();
const PORT = 3000;

const url =
  'mongodb+srv://biswajit:b7D7ehi28LWSQRmw@cluster0.epz3m.mongodb.net/coin_store?retryWrites=true&w=majority';

Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('database conncted!');
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('<h1>Hello! Its working!.</h1>');
});
