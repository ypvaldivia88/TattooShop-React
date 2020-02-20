'use strict';

var Trabajo = require('../model/trabajoModel.js');

exports.listTrabajo = function (req, res) {
    Trabajo.getAllTrabajo(function (err, trabajo) {
        if (err) return res.send(err);
        res.send(trabajo);
    });
};

exports.createTrabajo = function (req, res) {
    console.log(req.body);
    var new_trabajo = new Trabajo(req.body);
    if (!new_trabajo.nombre) return res.status(400).send({ error: true, message: 'Por favor entre el Nombre' });
    Trabajo.createTrabajo(new_trabajo, function (err, trabajo) {
        if (err) return res.send(err);
        res.json(trabajo);
    });
};

exports.readTrabajo = function (req, res) {
    Trabajo.getTrabajoById(req.params.id, function (err, trabajo) {
        if (err) return res.send(err);
        res.json(trabajo);
    });
};

exports.updateTrabajo = function (req, res) {
    Trabajo.updateTrabajoById(req.params.id, new Trabajo(req.body), function (err, trabajo) {
        if (err) return res.send(err);
        res.json(trabajo);
    });
};

exports.deleteTrabajo = function (req, res) {
    Trabajo.removeTrabajo(req.params.id, function (err, trabajo) {
        if (err) return res.send(err);
        res.json({ message: 'Trabajo eliminada correctamente' });
    });
};