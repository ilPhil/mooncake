require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var morgan = require('morgan')

require('./db');

const router = require('./router.js');
const app = new express();


app
  .use(morgan('combined'))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  .use(router)

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
