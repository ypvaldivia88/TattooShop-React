'user strict';

var sql = require('./db.js');

//Artista object constructor
var Artista = function (artista) {
    this.nombre = artista.nombre;
};

Artista.getAllArtista = function (result) {
    sql.query("Select * from artista", function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Artista.getArtistaById = function (id, result) {
    sql.query("Select nombre from artista where id = ? ", id, function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Artista.createArtista = (newArtista, result) => {
    sql.query("INSERT INTO artista set ?", newArtista, (err, res) => {
        if (err) return result(err, null);
        result(null, res.id);
    });
};

Artista.updateArtistaById = function (id, artista, result) {
    sql.query("UPDATE artista SET nombre = ? WHERE id = ?", [artista.nombre, id], function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Artista.removeArtista = function (id, result) {
    sql.query("DELETE FROM artista WHERE id = ?", [id], function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

module.exports = Artista;