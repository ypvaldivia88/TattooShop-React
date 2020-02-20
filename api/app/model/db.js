'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'tattooshop'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;