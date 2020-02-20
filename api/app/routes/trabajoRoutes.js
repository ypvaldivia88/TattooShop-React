'use strict';

module.exports = function (trabajo) {
    var trabajoController = require('../controller/trabajoController');

    // trabajoController Routes
    trabajo.route('/trabajos')
        .get(trabajoController.listTrabajo)
        .post(trabajoController.createTrabajo);

    trabajo.route('/trabajos/:id')
        .get(trabajoController.readTrabajo)
        .put(trabajoController.updateTrabajo)
        .delete(trabajoController.deleteTrabajo);
};