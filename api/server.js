const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 4000;

require('./app/model/db');

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var artistaRoutes = require('./app/routes/artistaRoutes');
var citaRoutes = require('./app/routes/citaRoutes');
var clienteRoutes = require('./app/routes/clienteRoutes');
var pagoRoutes = require('./app/routes/pagoRoutes');
var tipotrabajoRoutes = require('./app/routes/tipotrabajoRoutes');
var trabajoRoutes = require('./app/routes/trabajoRoutes');
var usuarioRoutes = require('./app/routes/usuarioRoutes');

artistaRoutes(app);
citaRoutes(app);
clienteRoutes(app);
pagoRoutes(app);
tipotrabajoRoutes(app);
trabajoRoutes(app);
usuarioRoutes(app);