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

function writeUserData(userId, points, word) {
  firebase.database().ref('users/' + userId).set({
    points,
    word
  });
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/', express.static('./.prod/'));

app.post('/points', (req, res) => {
  const userId = req.body.userId;
  const points = req.body.points;
  const word = req.body.word;

  writeUserData(userId, points, word);
});

app.listen(variables.port);
console.log(`SERVER: Listening on port ${variables.port}`);
