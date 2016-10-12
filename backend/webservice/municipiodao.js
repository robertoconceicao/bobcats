var mysql = require("mysql");
var md5 = require('MD5');

var _findAllMunicipios = function(conn, req, resp) {
    var query = "Select m.cdMunicipio, m.nmMunicipio, e.nmEstado " +
                "from epadmunicipio m " +
                "join epadestado e on e.cdestado = m.cdestado " +
                "order by m.nmmunicipio, e.nmestado";
    var table = ["%" + req.params.nmMunicipio + "%"];
    query = mysql.format(query, table);
    return conn.query(query, function(err, rows) {
        if (err) {
            resp.json({
                "Error": true,
                "Message": "Error executing MySQL query " + err
            });
        } else {
            resp.json({
                "Error": false,
                "Message": "Success",
                "Municipios": rows
            });
        }
    });
};

var _findAllMunicipiosByNome = function(conn, req, resp) {
    var query = "Select m.cdMunicipio, m.nmMunicipio, e.nmEstado " +
                "from epadmunicipio m " +
                "join epadestado e on e.cdestado = m.cdestado " +
                "where upper(m.nmmunicipio) like upper( ? ) " +
                "order by m.nmmunicipio, e.nmestado";
    var table = ["%" + req.params.nmMunicipio + "%"];
    query = mysql.format(query, table);
    return conn.query(query, function(err, rows) {
        if (err) {
            resp.json({
                "Error": true,
                "Message": "Error executing MySQL query " + err
            });
        } else {
            resp.json({
                "Error": false,
                "Message": "Success",
                "Municipios": rows
            });
        }
    });
};

module.exports = {
    findAllMunicipios: _findAllMunicipios,
    findAllMunicipiosByNome: _findAllMunicipiosByNome
};
