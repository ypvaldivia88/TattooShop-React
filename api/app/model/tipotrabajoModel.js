'user strict';

var sql = require('./db.js');

//Tipotrabajo object constructor
var Tipotrabajo = tipotrabajo => {     
    this.nombre = tipotrabajo.nombre;
};

Tipotrabajo.getAllTipotrabajo = function (result) {
    sql.query("Select * from tipotrabajo", function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Tipotrabajo.getTipotrabajoById = function (id, result) {
    sql.query("Select nombre from tipotrabajo where id = ? ", id, function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Tipotrabajo.createTipotrabajo = (newTipotrabajo, result) => {
    sql.query("INSERT INTO tipotrabajo set ?", newTipotrabajo, (err, res) => {
        if (err) return result(err, null);
        result(null, res.id);
    });
};

Tipotrabajo.updateTipotrabajoById = function (id, tipotrabajo, result) {
    sql.query(`UPDATE tipotrabajo SET nombre = ? WHERE id = ?`,
    [tipotrabajo.nombre], (err, res) => {
        if (err) return result(err, null);
        result(null, res);
    });
};

Tipotrabajo.removeTipotrabajo = function (id, result) {
    sql.query("DELETE FROM tipotrabajo WHERE id = ?", [id], function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

module.exports = Tipotrabajo;