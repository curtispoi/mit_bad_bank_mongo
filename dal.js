const ObjectId = require('mongoose').Types.ObjectId;
const port=8080;  //  React dev server (3000) is proxied to port 8080
const cors = require('cors');
const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://thatcrazysomebeach:Swepea@cluster0.htnm7ae.mongodb.net/data?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "development";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "people"
         const users = db.collection("users");



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
