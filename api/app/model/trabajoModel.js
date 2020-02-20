'user strict';

var sql = require('./db.js');

//Trabajo object constructor
var Trabajo = trabajo => {
    this.fecha = trabajo.fecha;
    this.precio = trabajo.precio;
    this.descripcion = trabajo.descripcion;
    this.cita_id = trabajo.cita_id;
    this.artista_id = trabajo.artista_id;
    this.pago_id = trabajo.pago_id;
};

Trabajo.getAllTrabajo = function (result) {
    sql.query("Select * from trabajo", function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Trabajo.getTrabajoById = function (id, result) {
    sql.query("Select nombre from trabajo where id = ? ", id, function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Trabajo.createTrabajo = (newTrabajo, result) => {
    sql.query("INSERT INTO trabajo set ?", newTrabajo, (err, res) => {
        if (err) return result(err, null);
        result(null, res.id);
    });
};

Trabajo.updateTrabajoById = function (id, trabajo, result) {
    sql.query(`UPDATE trabajo SET fecha = ?, precio = ?, descripcion = ?, cita_id = ?, artista_id = ?, 
        pago_id = ? WHERE id = ?`,
        [trabajo.fecha, trabajo.precio, trabajo.descripcion, trabajo.cita_id, trabajo.artista_id, trabajo.pago_id],
        (err, res) => {
            if (err) return result(err, null);
            result(null, res);
        });
};

Trabajo.removeTrabajo = function (id, result) {
    sql.query("DELETE FROM trabajo WHERE id = ?", [id], function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

module.exports = Trabajo;