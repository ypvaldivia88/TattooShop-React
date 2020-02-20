'use strict';

module.exports = function (tipotrabajo) {
    var tipotrabajoController = require('../controller/tipotrabajoController');

    // tipotrabajoController Routes
    tipotrabajo.route('/tipostrabajo')
        .get(tipotrabajoController.listTipotrabajo)
        .post(tipotrabajoController.createTipotrabajo);

    tipotrabajo.route('/tipostrabajo/:id')
        .get(tipotrabajoController.readTipotrabajo)
        .put(tipotrabajoController.updateTipotrabajo)
        .delete(tipotrabajoController.deleteTipotrabajo);
};