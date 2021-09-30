const express = require('express');
const morgan = require('morgan');
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/films', require('./routes/index'));

app.listen(3000, () => {
  console.log('Server on port 3000');
});