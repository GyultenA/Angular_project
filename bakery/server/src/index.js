const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const apiRouter = require('./router');

const dbUri = process.env.DB_URI || 'mongodb://127.0.0.1:27017/bakery';
const dbPort = process.env.DB_PORT || '5000';
const {authMiddleware} = require('./middlewares/authMiddle')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(authMiddleware);
app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use('/api', apiRouter);


//Connecting to mongoDB
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  //   useCreateIndex: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  app.listen(dbPort, () => console.log(`App is listening on http://localhost:${dbPort}`));