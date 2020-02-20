'user strict';

var sql = require('./db.js');

//Usuario object constructor
var Usuario = usuario => {
    this.usuario = usuario.usuario;
    this.nombre = usuario.nombre;
    this.apellidos = usuario.apellidos;
    this.correo = usuario.correo;
    this.contrasenna = usuario.contrasenna;
    this.rol = usuario.rol;
    this.activo = usuario.activo;
    this.creado = usuario.creado;
    this.actualizado = usuario.actualizado;
};

Usuario.getAllUsuario = function (result) {
    sql.query("Select * from usuario", function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Usuario.getUsuarioById = function (id, result) {
    sql.query("Select nombre from usuario where id = ? ", id, function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

Usuario.createUsuario = (newUsuario, result) => {
    sql.query("INSERT INTO usuario set ?", newUsuario, (err, res) => {
        if (err) return result(err, null);
        result(null, res.id);
    });
};

Usuario.updateUsuarioById = function (id, usuario, result) {
    sql.query(`UPDATE usuario SET usuario = ?, nombre = ?, apellidos = ?, correo = ?, 
        contrasenna = ?, rol = ?, activo = ?, creado = ?, actualizado = ? WHERE id = ?`,
        [usuario.usuario, usuario.nombre, usuario.apellidos, usuario.correo, usuario.contrasenna,
         usuario.rol, usuario.activo, usuario.creado, usuario.actualizado],
        (err, res) => {
            if (err) return result(err, null);
            result(null, res);
        });
};

Usuario.removeUsuario = function (id, result) {
    sql.query("DELETE FROM usuario WHERE id = ?", [id], function (err, res) {
        if (err) return result(err, null);
        result(null, res);
    });
};

module.exports = Usuario;