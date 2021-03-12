const mongoose = require('mongoose');

const URI ="mongodb+srv://utd:utd123456@cluster0.at08k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Conexión exitosa');
};

module.exports = connectDB;
