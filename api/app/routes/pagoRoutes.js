'use strict';

module.exports = function (pago) {
    var pagoController = require('../controller/pagoController');

    // pagoController Routes
    pago.route('/pagos')
        .get(pagoController.listPago)
        .post(pagoController.createPago);

    pago.route('/pagos/:id')
        .get(pagoController.readPago)
        .put(pagoController.updatePago)
        .delete(pagoController.deletePago);
};