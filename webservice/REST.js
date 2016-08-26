var mysql = require("mysql");
var usuariodao = require("./usuariodao");

function REST_ROUTER(router, connection, md5) {
    var self = this;
    self.handleRoutes(router, connection, md5);
}



REST_ROUTER.prototype.handleRoutes = function(router, connection, md5) {
    var callback = function(res, err, rows) {
        if (err) {
            res.json({
                "Error": true,
                "Message": "Error executing MySQL query"
            });
        } else {
            res.json({
                "Error": false,
                "Message": "Success",
                "Usuarios": rows
            });
        }
    };


    router.get("/", function(req, res) {
        res.json({
            "Usuario": {
                "GET  /api/usuario": "Lista todos os usuarios",
                "GET  /api/usuario/:login": "Lista o usuario pelo login",
                "POST /api/usuario": "Insere um novo usuario",
                "PUT  /api/usuario": "Atualiza o usuario"
            }
        });
    });
    /* USUARIO */

    router.get("/teste", function(req, res) {
        usuariodao.findAllUsuarios(connection);
    });

    router.get("/usuario", function(req, res) {
        var query = "select * from ??";
        var table = ["esegusuario"];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({
                    "Error": true,
                    "Message": "Error executing MySQL query"
                });
            } else {
                res.json({
                    "Error": false,
                    "Message": "Success",
                    "Usuarios": rows
                });
            }
        });
    });

    router.get("/usuario/:delogin", function(req, res) {
        var query = "select * from ?? where ?? = ?";
        var table = ["esegusuario", "delogin", req.params.delogin];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({
                    "Error": true,
                    "Message": "Error executing MySQL query " + err
                });
            } else {
                res.json({
                    "Error": false,
                    "Message": "Success",
                    "Usuarios": rows
                });
            }
        });
    });

    router.post("/usuario", function(req, res) {
        var query = "insert into esegusuario (delogin, desenha, flativo) values (?, ?, ?)";
        if (!!req.body.delogin && !!req.body.desenha && !!req.body.flativo) {
            var table = [req.body.delogin, md5(req.body.desenha), req.body.flativo];
            query = mysql.format(query, table);
            connection.query(query, function(err, rows) {
                if (err) {
                    res.json({
                        "Error": true,
                        "Message": "Error executing MySQL query " + err
                    });
                } else {
                    res.json({
                        "Error": false,
                        "Message": "Usuario adicionado com sucesso"
                    });
                }
            });
        } else {
            res.json({
                "Error": true,
                "Message": "Erro ao inserir o usuario, parametros obrigatorios (delogin, desenha, flativo)"
            });
        }
    });

    router.put("/usuario", function(req, res) {
        var query = "update ?? set ?? = ?, ?? = ? where ?? = ?";
        var table = ["esegusuario", "desenha", md5(req.body.desenha), "flativo", req.body.flativo, "delogin", req.body.delogin];
        query = mysql.format(query, table);
        connection.query(query, function(err, rows) {
            if (err) {
                res.json({
                    "Error": true,
                    "Message": "Error executing MySQL query " + err
                });
            } else {
                res.json({
                    "Error": false,
                    "Message": "Dados do usuario " + req.body.delogin + " atualizado com sucesso"
                });
            }
        });
    });
}

module.exports = REST_ROUTER;
