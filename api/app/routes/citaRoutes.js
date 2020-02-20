'use strict';

module.exports = function (cita) {
    var citaController = require('../controller/citaController');

    // citaController Routes
    cita.route('/citas')
        .get(citaController.listCita)
        .post(citaController.createCita);

    cita.route('/citas/:id')
        .get(citaController.readCita)
        .put(citaController.updateCita)
        .delete(citaController.deleteCita);
};