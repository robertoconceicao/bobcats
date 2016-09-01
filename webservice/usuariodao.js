var mysql = require("mysql");
var md5 = require('MD5');


var _findAllUsuarios = function(conn, req, resp) {
    var query = "select * from esegusuario";
    query = mysql.format(query);
    return conn.query(query, function(err, rows) {
        if (err) {
            resp.json({
                "Error": true,
                "Message": "Error executing MySQL query"
            });
        } else {
            resp.json({
                "Error": false,
                "Message": "Success",
                "Usuarios": rows
            });
        }
    });
};

var _findUsuariosByLogin = function(conn, req, resp) {
    var query = "select * from ?? where ?? = ?";
    var table = ["esegusuario", "deLogin", req.params.deLogin];
    query = mysql.format(query, table);
    return conn.query(query, function(err, rows) {
        if (err) {
            resp.json({
                "Error": true,
                "Message": "Error executing MySQL query"
            });
        } else {
            resp.json({
                "Error": false,
                "Message": "Success",
                "Usuarios": rows
            });
        }
    });
};

var _inserirUsuario = function(conn, req, resp) {
    var query = "insert into esegusuario (deLogin, deSenha, flAtivo) values (?, ?, ?)";
    var table = [req.body.deLogin, md5(req.body.deSenha), req.body.flAtivo];
    query = mysql.format(query, table);
    return conn.query(query, function(err, rows) {
        if (err) {
            resp.json({
                "Error": true,
                "Message": "Error executing MySQL query"
            });
        } else {
            resp.json({
                "Error": false,
                "Message": "Success",
                "Usuarios": rows
            });
        }
    });
};

var _atualizarUsuario = function(conn, req, resp) {
    var query = "update ?? set ?? = ?, ?? = ? where ?? = ?";
    console.log(req.body.deSenha);
    var table = ["esegusuario", "deSenha", md5(req.body.deSenha), "flAtivo", req.body.flAtivo, "deLogin", req.body.deLogin];
    query = mysql.format(query, table);
    return conn.query(query, function(err, rows) {
        if (err) {
            resp.json({
                "Error": true,
                "Message": "Error executing MySQL query"
            });
        } else {
            resp.json({
                "Error": false,
                "Message": "Success",
                "Usuarios": rows
            });
        }
    });
};

var _excluirUsuario = function(conn, req, resp) {
    var query = "delete from ?? where ?? = ?";
    var table = ["esegusuario", "deLogin", req.body.deLogin];
    query = mysql.format(query, table);
    return conn.query(query, function(err, rows) {
        if (err) {
            resp.json({
                "Error": true,
                "Message": "Error executing MySQL query"
            });
        } else {
            resp.json({
                "Error": false,
                "Message": "Success",
                "Usuarios": rows
            });
        }
    });
};

module.exports = {
    findAllUsuarios: _findAllUsuarios,
    findUsuariosByLogin: _findUsuariosByLogin,
    inserirUsuario: _inserirUsuario,
    atualizarUsuario: _atualizarUsuario,
    excluirUsuario: _excluirUsuario,
};
