'use strict';

var Tipotrabajo = require('../model/tipotrabajoModel.js');

exports.listTipotrabajo = function (req, res) {
    Tipotrabajo.getAllTipotrabajo(function (err, tipotrabajo) {
        if (err) return res.send(err);
        res.send(tipotrabajo);
    });
};

exports.createTipotrabajo = function (req, res) {
    console.log(req.body);
    var new_tipotrabajo = new Tipotrabajo(req.body);
    if (!new_tipotrabajo.nombre) return res.status(400).send({ error: true, message: 'Por favor entre el Nombre' });
    Tipotrabajo.createTipotrabajo(new_tipotrabajo, function (err, tipotrabajo) {
        if (err) return res.send(err);
        res.json(tipotrabajo);
    });
};

exports.readTipotrabajo = function (req, res) {
    Tipotrabajo.getTipotrabajoById(req.params.id, function (err, tipotrabajo) {
        if (err) return res.send(err);
        res.json(tipotrabajo);
    });
};

exports.updateTipotrabajo = function (req, res) {
    Tipotrabajo.updateTipotrabajoById(req.params.id, new Tipotrabajo(req.body), function (err, tipotrabajo) {
        if (err) return res.send(err);
        res.json(tipotrabajo);
    });
};

exports.deleteTipotrabajo = function (req, res) {
    Tipotrabajo.removeTipotrabajo(req.params.id, function (err, tipotrabajo) {
        if (err) return res.send(err);
        res.json({ message: 'Tipotrabajo eliminada correctamente' });
    });
};