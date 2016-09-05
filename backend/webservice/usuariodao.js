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
    console.log("_inserirUsuario: cdusuario: "+req.body.cdusuario + " delogin:"+req.body.delogin +" desenha: "+req.body.desenha + " flativo: "+req.body.flativo);
    var query = "insert into esegusuario (deLogin, deSenha, flAtivo) values (?, ?, ?)";
    var table = [req.body.delogin, md5(req.body.desenha), req.body.flativo];
    query = mysql.format(query, table);
    return conn.query(query, function(err, rows) {
        if (err) {
            console.log("ERR INSERIR USUARIO: " +err);
            resp.json({
                "Error": true,
                "Message": "Error executing MySQL query"
            });
        } else {
            console.log("SUCCESS INSERIR USUARIO");
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

var _validaUsuario = function(conn, req, resp) {
    var query = "select * from esegusuario where delogin = ? and deSenha = ?";
    var table = [req.body.delogin, md5(req.body.desenha)];
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
    validaUsuario: _validaUsuario
};
