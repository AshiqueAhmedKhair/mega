const mongoose = require('mongoose');

import { MONGODB_URI } from './utils.js';

// const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/product';

async function connectDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Database connection successful!!!!');
  } catch (error) {
    console.log(`Database connection failed ${MONGODB_URI}`, error);
  }
}

module.exports = connectDatabase;
