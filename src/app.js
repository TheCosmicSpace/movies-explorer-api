const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async function () {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT} port`);
    });
  } catch (e) {
    console.log(`Error: ${e}`);
  }
})();
