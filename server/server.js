const express = require('express');
const app = express();
const variables = require('../variables');
const firebase = require('firebase');
var bodyParser = require('body-parser');

var config = {
  apiKey: "AIzaSyCyWyJYEXpl8rxyedqxRRuVGg4cc423nnU",
  authDomain: "reactultimate.firebaseapp.com",
  databaseURL: "https://reactultimate.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};

firebase.initializeApp(config);
var database = firebase.database();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', express.static('./.prod/'));

app.post('/points', (req, res) => {
  const userId = req.body.userId;
  const points = req.body.points;
  const words = req.body.lastword;

  return firebase.database().ref('users/' + userId).set({
    points,
    words
  }).then(function(response) {
    res.send(response);
  });
});

app.get('/points/:userId', (req, res) => {
  const userId = req.params.userId;
  return firebase.database().ref('/users/' + userId)
    .once('value').
    then(function (snapshot) {
      try {
      var points = snapshot.val().points;
      var words = snapshot.val().words;
      res.send({
        points,
        words
      });
      }
    catch(e) {
        console.log('there has been an error', e);
      }
    });
});

app.listen(variables.port);
console.log(`SERVER: Listening on port ${variables.port}`);
