'user strict';

var sql = require('./db.js');

//Pago object constructor
var Pago = pago => {
    this.desde = pago.desde;
    this.hasta = pago.hasta;
    this.efectivo = pago.efectivo;
    this.artista_id = pago.artista_id;
};

Pago.getAllPago = function (result) {
    sql.query("Select * from pago", function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Pago.getPagoById = function (id, result) {
    sql.query("Select nombre from pago where id = ? ", id, function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Pago.createPago = (newPago, result) => {
    sql.query("INSERT INTO pago set ?", newPago, (err, res) => {
        if (err) return result(err, null);
        result(null, res.id);
    });
};

Pago.updatePagoById = function (id, pago, result) {
    sql.query(`UPDATE pago SET desde = ?, hasta = ?, efectivo = ?, artista_id = ? WHERE id = ?`,
        [pago.desde, pago.hasta, pago.efectivo, pago.artista_id],
        (err, res) => {
            if (err) return result(err, null);
            result(null, res);
        });
};

Pago.removePago = function (id, result) {
    sql.query("DELETE FROM pago WHERE id = ?", [id], function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

module.exports = Pago;