const express = require('express');
const app = express();
const cors = require('cors');
const dal = require('./dal.js');
const mongoose = require('mongoose);
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://thatcrazysomebeach:Swepea@cluster0.htnm7ae.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Database connected successfully!');
      })
      .catch((err) => {
        console.log('Error connecting with error code:', err);
      });
    
    app.listen(PORT, () => {
      console.log('Server starts at port...');


// CreateAccount
app.post('/account/createaccount', (req, res) => {
  dal.create(req.body.name, req.body.email, req.body.password)
    .then((user) => {
      console.log('index.js createaccount user: ', user);
      res.send(user);
    });
});

// Find User By Email
app.get('/account/login/:email', (req, res) => {
  dal.login(req.params.email)
    .then((user) => {
      console.log('index.js login user: ', user);
      res.send(user);
    });
});

// Find User By ID
app.get('/find/user/:id', (req, res) => {
  dal.findUser(req.params.id)
    .then((user) => {
      console.log('index.js find user: ', user);
      res.send(user);
    });
});

// Update Balance
app.post('/update/balance', (req, res) => {
  dal.updateBalance(req.body.currentUser, req.body.amount)
    .then((balance) => {
      console.log('index.js deposit balance: ', balance);
      res.send(balance);
    });
});

// Find AllData
app.get('/find/allData', (req, res) => {
  dal.allData()
    .then((users) => {
      console.log('index.js allData users: ', users);
      res.send(users);
    })
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
