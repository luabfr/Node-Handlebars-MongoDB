const express = require('express');
const path = require('path');                   // Para manejo de rutas de Archivos
const PORT = process.env.PORT || 3000;          // Para Heroku
const exphbs = require('express-handlebars');   // Handlebars
var app = express();

//Objeto de prueba. Estoy pasando valores para ser renderizados.
var miObjeto = { name: 'Lucho' , edad:'29', color:'Negro'};
var misProductos = { nombre: 'Mi Producto', productos: ['tv', 'printer', 'ps4'] };
var objetoIf = {
  name: 'Lucho',
  edad: '29',
  color: 'Negro'
};

//Archivos HTML
var indexHTML = path.join(__dirname, 'test.html');





//Para poder utilizar ASSETs: se debe utilizar la carpeta 'public', y meter dentro todos los CSS, IMGs, etc.
app.use(express.static('public'));
//Esto es solo por si se quiere utilizar '/assets', como direccion padre de los demas assets, para los archivos que estan denbtro de la carpeta 'public'. Ej: 'assets/css/estilo.css'
//Como beneficio podemos utilizar cualquier carpeta para nuestro contenido estático
//app.use('/assets', express.static('public'));





// Establecemos 'MAIN.handlebars' como nuestro 'MARCO' del sitio.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Establecemos a Handlebars como nuestro motor de templates
app.set('view engine', 'handlebars');





app.get('/', function (req, res) {
  res.render('home', miObjeto );
})
app.get('/productos', function (req, res) {
  res.render('productos', misProductos );
})
app.get('/if', function (req, res) {
  res.render('if', objetoIf);
})

app.get('/download', function (request, response) {
  response.download( indexHTML );
});


app.get('/test', function (request, response) {
  response.sendFile( indexHTML );
});








app.listen(PORT, function () {
  console.log('Escuchando el puerto: 3000!');
});