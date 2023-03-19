import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://rentiinn:harmselution123@cluster0.hhcmgnf.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => console.log('DB OK'))
  .catch((error) => console.log('DB error', error));

const app = express();

app.get('/', (req, res) => {
  res.send('HEssLLo!');
});

app.listen(4444, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Server OK');
});
