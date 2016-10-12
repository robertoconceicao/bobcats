var mysql = require("mysql");
var md5 = require('MD5');

var _findAllSujeitos = function(conn, req, resp) {
    var query = "select * from egrlsujeito";
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
                "Sujeitos": rows
            });
        }
    });
};

var _findAllSujeitoByLogin = function(conn, req, resp) {
    var query = "Select s.* from egrlsujeito s join esegusuario u on s.cdUsuario = u.cdusuario where u.deLogin = ?";
    var table = [req.params.deLogin];
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
                "Sujeitos": rows
            });
        }
    });
};

var _findAllSujeitoByCodigo = function(conn, req, resp) {
    var query = "Select s.* from egrlsujeito s join esegusuario u on " +
                "s.cdUsuario = u.cdusuario where s.cdUsuario = ?";
    var table = [req.params.cdUsuario];
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
                "Sujeitos": rows
            });
        }
    });
};

var _inserirSujeito = function(conn, req, resp) {
    var query = "insert into egrlsujeito (cdUsuario, cdMunicipio, nmSujeito, " +
                "dtNascimento, flSexo, nuTelefone, deEmail) " +
                "values (?, ?, ?, ?, ?, ?, ?)";
    var table = [req.body.cdUsuario, req.body.cdMunicipio, req.body.nmSujeito,
                 req.body.dtNascimento, req.body.flSexo, req.body.nuTelefone,
                 req.body.deEmail];
    console.log("inserirSujeito: "+table);                 
    query = mysql.format(query, table);
    return conn.query(query, function(err, rows) {
        if (err) {
            resp.json({
                "Error": true,
                "Message": "Erro ao inserir o sujeito: " + err
            });
            console.log("Erro ao inserir o sujeito: "+ err);
        } else {
            resp.json({
                "Error": false,
                "Message": "Success",
                "Sujeito": rows
            });
            console.log("Success inserir o sujeito ");
        }
    });
};

var _atualizarSujeito = function(conn, req, resp) {
    var query = "update egrlsujeito set cdMunicipio = ?, " +
                "nmSujeito = ?, dtNascimento = ?, flSexo = ?, " +
                "nuTelefone = ?, deEmail = ? " +
                "where cdUsuario = ? ";
    var table = [req.body.cdMunicipio, req.body.nmSujeito,
                 req.body.dtNascimento, req.body.flSexo, req.body.nuTelefone,
                 req.body.deEmail, req.body.cdUsuario];
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
                "Sujeito": rows
            });
        }
    });
};

var _excluirSujeito = function(conn, req, resp) {
    var query = "delete from egrlsujeito where cdUsuario = ?";
    var table = [req.body.cdUsuario];
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
                "Sujeitos": rows
            });
        }
    });
};

var _inserirSujeitoUsuario = function(conn, req, resp) {
    var query = "insert into esegusuario (deLogin, deSenha, flAtivo) values (?, ?, ?)";
    var table = [req.body.deLogin, md5(req.body.deSenha), req.body.flAtivo];
    query = mysql.format(query, table);
    conn.query(query, function(err, rows) {
        if (err) {
            resp.json({
                "Error": true,
                "Message": "Erro inserir o usuario: \n" + err
            });
        } else {
            req.body.cdUsuario = rows.insertId;
            _inserirSujeito(conn, req, resp);
        }
    });
};


module.exports = {
    findAllSujeitos: _findAllSujeitos,
    findAllSujeitoByLogin: _findAllSujeitoByLogin,
    findAllSujeitoByCodigo: _findAllSujeitoByCodigo,
    inserirSujeito: _inserirSujeito,
    inserirSujeitoUsuario: _inserirSujeitoUsuario,
    atualizarSujeito: _atualizarSujeito,
    excluirSujeito: _excluirSujeito
};
