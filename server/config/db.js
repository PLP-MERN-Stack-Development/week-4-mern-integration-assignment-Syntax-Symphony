const mongoose = require('mongoose');

const connectDB = () =>
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => { console.error(err); process.exit(1); });

module.exports = connectDB;
