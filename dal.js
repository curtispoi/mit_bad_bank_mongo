const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongoose').Types.ObjectId
const url = 'mongodb://localhost:27017';
const db = process.env.MONGODB_URL;
let users = null;

// connect to mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/27017', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
  
  // connect to Bank database
  db = client.db('mit_bad_bank');
  // user collection
  users = db.collection('users');

});


const create = (name, email, password) => {
  return new Promise((resolve, reject) => {
    const user = {name, email, password, balance: 0};
    users.insertOne(user, {w:1}, (err, result) => {
      console.log('dal.js create user: ', user);
      console.log('dal.js create result: ', result);
      err ? reject(err) : resolve(user);
    });
  });
}

const login = (email) => {
  return new Promise((resolve, reject) => {
    users.findOne({email}, (err, result) => {
      console.log('dal.js login result: ', result)
      err ? reject(err) : resolve(result);
    });
  });
}

const findUser = (id) => {
  return new Promise((resolve, reject) => {
    users.findOne({_id: ObjectId(id)}, (err, result) => {
      console.log('dal.js login result: ', result)
      err ? reject(err) : resolve(result);
    });
  });
}

const updateBalance = (id, amount) => {
  return new Promise((resolve, reject) => {
    users.findOneAndUpdate({_id: ObjectId(id)}, {$inc: {balance: amount}}, {returnDocument: 'after'}, (err, result) => {
      console.log('dal.js deposit balance: ', result)
      err ? reject(err) : resolve(result);
    });
  })
}

const allData = () => {
  return new Promise((resolve, reject) => {
    users.find().toArray((err, result) => {
      err ? reject(err) : resolve(result);
    });
  })
}

module.exports = {create, login, findUser, updateBalance, allData};
