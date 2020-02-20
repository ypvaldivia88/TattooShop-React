'use strict';

module.exports = function (cliente) {
    var clienteController = require('../controller/clienteController');

    // clienteController Routes
    cliente.route('/clientes')
        .get(clienteController.listCliente)
        .post(clienteController.createCliente);

    cliente.route('/clientes/:id')
        .get(clienteController.readCliente)
        .put(clienteController.updateCliente)
        .delete(clienteController.deleteCliente);
};