require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const {json} = require('body-parser');

const {getUser, login, logout} = require('./ctrl');

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.use(session({
  secret: 'hskajghas',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1223334444
  }
}));

app.get('/api/getUser', getUser);
app.post('/api/login', login);
app.get('/api/logout', logout);

app.listen(port, () => console.log(`Listening on port: ${port}`));