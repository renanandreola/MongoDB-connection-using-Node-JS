const mongoose = require('mongoose');

const URI ="mongodb+srv://renan:renan@cluster0-wtjhx.mongodb.net/store?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('! MONGODB CONNECTED !');
};

module.exports = connectDB;
