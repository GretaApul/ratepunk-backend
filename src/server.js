const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = require('./config');

const emailRoute = require('./routes/emailRoutes');

const app = express();

// middleWare
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/', emailRoute);
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 404
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Page not found (*)' });
});
app.listen(PORT, () => console.log('server online on PORT', PORT));
