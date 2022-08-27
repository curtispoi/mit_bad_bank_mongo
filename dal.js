const ObjectId = require('mongoose').Types.ObjectId;
const port=8080;  //  React dev server (3000) is proxied to port 8080
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://thatcrazysomebeach:Swepea@cluster0.htnm7ae.mongodb.net/?retryWrites=true&w=majority";
let mongodb;

// establish connection to the database
function connect(callback){
  mongoClient.connect(uri, (err, db) => {
  console.log("ERROR");
  console.log(err);
  console.log("SUCCESS");
  console.log(db);
    mongodb = db;
    callback();
  });
}

// get reference to database
function get(){
  return mongodb.db("development");
}

// close the database connection
function close(){
  mongodb.close();
}

module.exports = { connect, get, close };

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
