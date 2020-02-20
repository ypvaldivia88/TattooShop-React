'use strict';

var Usuario = require('../model/usuarioModel.js');

exports.listUsuario = function (req, res) {
    Usuario.getAllUsuario(function (err, usuario) {
        if (err) return res.send(err);
        res.send(usuario);
    });
};

exports.createUsuario = function (req, res) {
    console.log(req.body);
    var new_usuario = new Usuario(req.body);
    if (!new_usuario.nombre) return res.status(400).send({ error: true, message: 'Por favor entre el Nombre' });
    Usuario.createUsuario(new_usuario, function (err, usuario) {
        if (err) return res.send(err);
        res.json(usuario);
    });
};

exports.readUsuario = function (req, res) {
    Usuario.getUsuarioById(req.params.id, function (err, usuario) {
        if (err) return res.send(err);
        res.json(usuario);
    });
};

exports.updateUsuario = function (req, res) {
    Usuario.updateUsuarioById(req.params.id, new Usuario(req.body), function (err, usuario) {
        if (err) return res.send(err);
        res.json(usuario);
    });
};

exports.deleteUsuario = function (req, res) {
    Usuario.removeUsuario(req.params.id, function (err, usuario) {
        if (err) return res.send(err);
        res.json({ message: 'Usuario eliminada correctamente' });
    });
};