'use strict';

var Artista = require('../model/artistaModel.js');

exports.listArtista = function (req, res) {
    Artista.getAllArtista(function (err, artista) {
        if (err) return res.send(err);
        res.send(artista);
    });
};

exports.createArtista = function (req, res) {
    console.log(req.body);
    var new_artista = new Artista(req.body);
    if (!new_artista.nombre) return res.status(400).send({ error: true, message: 'Por favor entre el Nombre' });
    Artista.createArtista(new_artista, function (err, artista) {
        if (err) return res.send(err);
        res.json(artista);
    });
};

exports.readArtista = function (req, res) {
    Artista.getArtistaById(req.params.id, function (err, artista) {
        if (err) return res.send(err);
        res.json(artista);
    });
};

exports.updateArtista = function (req, res) {
    Artista.updateArtistaById(req.params.id, new Artista(req.body), function (err, artista) {
        if (err) return res.send(err);
        res.json(artista);
    });
};

exports.deleteArtista = function (req, res) {
    Artista.removeArtista(req.params.id, function (err, artista) {
        if (err) return res.send(err);
        res.json({ message: 'Artista eliminado correctamente' });
    });
};