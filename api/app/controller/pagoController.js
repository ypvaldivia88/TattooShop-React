'use strict';

var Pago = require('../model/pagoModel.js');

exports.listPago = function (req, res) {
    Pago.getAllPago(function (err, pago) {
        if (err) return res.send(err);
        res.send(pago);
    });
};

exports.createPago = function (req, res) {
    console.log(req.body);
    var new_pago = new Pago(req.body);
    if (!new_pago.nombre) return res.status(400).send({ error: true, message: 'Por favor entre el Nombre' });
    Pago.createPago(new_pago, function (err, pago) {
        if (err) return res.send(err);
        res.json(pago);
    });
};

exports.readPago = function (req, res) {
    Pago.getPagoById(req.params.id, function (err, pago) {
        if (err) return res.send(err);
        res.json(pago);
    });
};

exports.updatePago = function (req, res) {
    Pago.updatePagoById(req.params.id, new Pago(req.body), function (err, pago) {
        if (err) return res.send(err);
        res.json(pago);
    });
};

exports.deletePago = function (req, res) {
    Pago.removePago(req.params.id, function (err, pago) {
        if (err) return res.send(err);
        res.json({ message: 'Pago eliminada correctamente' });
    });
};