const express = require('express');
const app = express();
const variables = require('../variables');
const firebase = require('firebase');
var bodyParser = require('body-parser');
var morgan = require('morgan')

var config = {
  apiKey: "AIzaSyCiyJWUbaor6SvG3nhO2Eg7bI6b5SWRY3Y",
  authDomain: "bullsncows-3d0f8.firebaseapp.com",
  databaseURL: "https://bullsncows-3d0f8.firebaseio.com/",
  storageBucket: "bucket.appspot.com"
};

firebase.initializeApp(config);
var database = firebase.database();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('tiny'));

app.use('/', express.static('./.prod/'));

app.use('/static', express.static('images'));

app.post('/points', (req, res) => {
  const userId = req.body.userId;
  const points = req.body.points;
  const words = req.body.lastword;
  const displayName = req.body.displayName;
  const level = req.body.level;

  return firebase.database().ref('users/' + userId).set({
    points,
    words,
    displayName,
    level
  }).then(function (response) {
    res.send(response);
  });
});

app.get('/details/:userId', (req, res) => {
  const userId = req.params.userId;
  return firebase.database().ref('/users/' + userId)
    .once('value').then(function (snapshot) {
      try {
        var points = snapshot.val().points;
        var words = snapshot.val().words;
        var level = snapshot.val().level;
        res.send({
          points,
          words,
          level
        });
      }
      catch (e) {
        console.log('there has been an error', e);
      }
    });
});

app.get('/users', (req, res) => {
  return firebase.database().ref('/users/')
    .once('value').then(function (snapshot) {
      try {
        var users = snapshot.val();
        res.send({
          users
        });
      }
      catch (e) {
        console.log('there has been an error', e);
      }
    });
});

app.listen(variables.port);
console.log(`SERVER: Listening on port ${variables.port}`);
