const mongoose = require('mongoose');
const { User } = require('./models.js');
const sha1 = require('sha1')

const saltRounds = 10;

function encrypt_pw(pw) {
  return new Promise((resolve, reject) => {
    const hash = sha1(pw);
    resolve(hash)
  })
}

function createUser(newUser) {
  
  const regExUsername = /^[a-zA-Z0-9_]{5,15}/;
  const regExPassword = /^[a-zA-Z0-9]{7,15}/;

  if(regExUsername.test(newUser.username) && regExPassword.test(newUser.password)) {
      encrypt_pw(newUser.password, (err, hash) => {
        const currentDate = new Date();
        const user = new User({
          username: newUser.username,
          password: hash,
          history: [],
          stats: 0,
          dateOfCreation: currentDate
        });
         
        user.save(function(err) {
          if (err) throw err; // mess till klient... inte unikt
          return true;
        });

      })
    } else {
      console.log("not valid password or username"); // mess till klient... valid tecken
      return false;  
    }
}

async function findAllUsers() {
  return await User.find({}, (err, users) => {
    if (err) throw err;
    return users;
  });
}


async function  findUserById(id) {
  return await User.findById(id, (err, user) => {
    if (err) throw err;
    return user;
  });  
}

async function findByUsername(username) {
  return await User.findOne({'username':username}, (err, user) => {
    if(err) console.log(err);
    return user;
  });
}

async function updateHistory(username, history) {
  return await User.findOne({username: username}, (err, user, history) => {
    user.history = history;
    user.save(function (err) {
        if(err) {
            console.error('ERROR!');
        }
    });
  });
}

async function tryLogin(username, password) {

  const user = await findByUsername(username); 
  bcrypt.compare(password, user.password, (err, res) => {
     if(res) console.log("SUCCESS!"); 
     else console.log("FAIL");
  });

}
//tryLogin("cmb", "gruffalon");
//tryLogin("cmb", "gruffalo3safafn");

module.exports = {
  tryLogin,
  updateHistory,
  findByUsername,
  findUserById,
  findAllUsers,
  createUser
};


