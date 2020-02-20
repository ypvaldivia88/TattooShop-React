'use strict';

var Cita = require('../model/citaModel.js');

exports.listCita = function (req, res) {
    Cita.getAllCita(function (err, cita) {
        if (err) return res.send(err);
        res.send(cita);
    });
};

exports.createCita = function (req, res) {
    console.log(req.body);
    var new_cita = new Cita(req.body);
    if (!new_cita.nombre) return res.status(400).send({ error: true, message: 'Por favor entre el Nombre' });
    Cita.createCita(new_cita, function (err, cita) {
        if (err) return res.send(err);
        res.json(cita);
    });
};

exports.readCita = function (req, res) {
    Cita.getCitaById(req.params.id, function (err, cita) {
        if (err) return res.send(err);
        res.json(cita);
    });
};

exports.updateCita = function (req, res) {
    Cita.updateCitaById(req.params.id, new Cita(req.body), function (err, cita) {
        if (err) return res.send(err);
        res.json(cita);
    });
};

exports.deleteCita = function (req, res) {
    Cita.removeCita(req.params.id, function (err, cita) {
        if (err) return res.send(err);
        res.json({ message: 'Cita eliminada correctamente' });
    });
};