'use strict';

var Cliente = require('../model/clienteModel.js');

exports.listCliente = function (req, res) {
    Cliente.getAllCliente(function (err, cliente) {
        if (err) return res.send(err);
        res.send(cliente);
    });
};

exports.createCliente = function (req, res) {
    console.log(req.body);
    var new_cliente = new Cliente(req.body);
    if (!new_cliente.nombre) return res.status(400).send({ error: true, message: 'Por favor entre el Nombre' });
    Cliente.createCliente(new_cliente, function (err, cliente) {
        if (err) return res.send(err);
        res.json(cliente);
    });
};

exports.readCliente = function (req, res) {
    Cliente.getClienteById(req.params.id, function (err, cliente) {
        if (err) return res.send(err);
        res.json(cliente);
    });
};

exports.updateCliente = function (req, res) {
    Cliente.updateClienteById(req.params.id, new Cliente(req.body), function (err, cliente) {
        if (err) return res.send(err);
        res.json(cliente);
    });
};

exports.deleteCliente = function (req, res) {
    Cliente.removeCliente(req.params.id, function (err, cliente) {
        if (err) return res.send(err);
        res.json({ message: 'Cliente eliminada correctamente' });
    });
};