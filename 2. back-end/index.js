require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const routes = require('./routes/router.js');

app.use(cors());
app.use(express.json());
app.use('/', routes);

const port = process.env.PORT || 8080;
const connectionURI = process.env.MONGODB_URI;

mongoose
  .connect(connectionURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Cannot connect to MongoDB', error));

app.listen(port, () => console.log(`Server is running on port ${port}`));
