require('dotenv').config();

const cors = require('cors');
const express = require('express');
const router = require('./routes/router');
const productRouter = require('./routes/productRoutes');
const connectDatabase = require('./config/db');
import { PORT } from './config/utils.js';

const port = PORT || 5000;

const app = express();
app.use(express.json());
app.use(
  cors()
);

connectDatabase();

app.use(router);
app.use(productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
