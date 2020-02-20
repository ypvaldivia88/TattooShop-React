'use strict';

module.exports = function (usuario) {
    var usuarioController = require('../controller/usuarioController');

    // usuarioController Routes
    usuario.route('/usuarios')
        .get(usuarioController.listUsuario)
        .post(usuarioController.createUsuario);

    usuario.route('/usuarios/:id')
        .get(usuarioController.readUsuario)
        .put(usuarioController.updateUsuario)
        .delete(usuarioController.deleteUsuario);
};