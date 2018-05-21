const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
var app = express();



app.get('/', function (request, response) {
  response.send('Hola, esto es Node!');
});

app.listen(PORT, function () {
  console.log('Escuchando el puerto: 3000!');
});