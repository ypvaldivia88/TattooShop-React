'user strict';

var sql = require('./db.js');

//Cita object constructor
var Cita = function (cita) {
    this.fecha = cita.fecha;
    this.deposito = cita.deposito;
    this.cita_id = cita.cita_id;
    this.tipo_trabajo_id = cita.tipo_trabajo_id;
    this.artista_id = cita.artista_id;
};

Cita.getAllCita = function (result) {
    sql.query("Select * from cita", function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Cita.getCitaById = function (id, result) {
    sql.query("Select nombre from cita where id = ? ", id, function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Cita.createCita = (newCita, result) => {
    sql.query("INSERT INTO cita set ?", newCita, (err, res) => {
        if (err) return result(err, null);
        result(null, res.id);
    });
};

Cita.updateCitaById = function (id, cita, result) {
    sql.query(`UPDATE cita SET fecha = ?, deposito = ?, cliente_id = ?, 
        tipo_trabajo_id = ?, artista_id = ? WHERE id = ?`,
        [cita.fecha, cita.deposito, cliente.cliente_id, cliente.tipo_trabajo_id, cliente.artista_id],
        (err, res) => {
            if (err) return result(err, null);
            result(null, res);
        });
};

Cita.removeCita = function (id, result) {
    sql.query("DELETE FROM cita WHERE id = ?", [id], function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

module.exports = Cita;