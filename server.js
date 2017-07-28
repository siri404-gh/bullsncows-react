const express = require('express');
const app = express();
const variables = require('./variables');

app.use('/', express.static('.'));
app.listen(variables.port);
console.log(`SERVER: Listening on port ${variables.port}`);
