'use strict';

module.exports = function (artista) {
    var artistaController = require('../controller/artistaController');

    // artistaController Routes
    artista.route('/artistas')
        .get(artistaController.listArtista)
        .post(artistaController.createArtista);

    artista.route('/artistas/:id')
        .get(artistaController.readArtista)
        .put(artistaController.updateArtista)
        .delete(artistaController.deleteArtista);
};