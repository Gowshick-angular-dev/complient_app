const mongoose = require('mongoose');
const connectionString = "mongodb://127.0.0.1:27017/";
const connect = async () => {
  try {
      await mongoose.connect(connectionString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
  } catch (error) {
      console.error('Connection to MongoDB failed:', error);
  }
};

module.exports = { connect };
