const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json());

const workingHours = require('./routes/api/workingHours');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongo 
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('Success!'))
  .catch(err => console.log(err));

  app.use('/api/workinghours', workingHours);
  app.use('/api/users', users);
  app.use('/api/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`We are live on port ${port}`));