const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/users');
const userAuthRouter = require('./routes/usersAuth');
const moviesRouter = require('./routes/movies');
const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(userAuthRouter);

// use middlewares
app.use(auth);
app.use(userRouter);
app.use(moviesRouter);

(async function () {
  try {
    await mongoose.connect('mongodb://localhost:27017/bitfilmsdb');
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT} port`);
    });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
})();
