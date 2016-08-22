/*usuariodao*/
var mysql = require("mysql");

var _findAllUsuarios = function(conn, callback) {
    var query = "select * from esegusuario";
    query = mysql.format(query);
    var objeto = {};
    return conn.query(query, function(err, rows) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
};

module.exports = {
    findAllUsuarios: _findAllUsuarios
};
