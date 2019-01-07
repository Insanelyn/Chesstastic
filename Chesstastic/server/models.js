const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/chesstastic', { useNewUrlParser: true, autoIndex: false } , function(error) {
  if(error) {
    throw error;
  } else {
    console.log('Successfully connected');
  } 
});


const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  history: [String],
  stats: Number,
  dateOfCreation: Date
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User
};
