'user strict';

var sql = require('./db.js');

//Cliente object constructor
var Cliente = cliente => {
    this.nombre = cliente.nombre;
    this.telefono = cliente.telefono;
};

Cliente.getAllCliente = function (result) {
    sql.query("Select * from cliente", function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Cliente.getClienteById = function (id, result) {
    sql.query("Select nombre from cliente where id = ? ", id, function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Cliente.createCliente = (newCliente, result) => {
    sql.query("INSERT INTO cliente set ?", newCliente, (err, res) => {
        if (err) return result(err, null);
        result(null, res.id);
    });
};

Cliente.updateClienteById = function (id, cliente, result) {
    sql.query(`UPDATE cliente SET nombre = ?, telefono = ? WHERE id = ?`,
        [cliente.nombre, cliente.telefono],
        (err, res) => {
            if (err) return result(err, null);
            result(null, res);
        });
};

Cliente.removeCliente = function (id, result) {
    sql.query("DELETE FROM cliente WHERE id = ?", [id], function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

module.exports = Cliente;