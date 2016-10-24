var mysql = require("mysql");
var usuariodao = require("./usuariodao");
var sujeitodao = require("./sujeitodao");
var municipiodao = require("./municipiodao");

function REST_ROUTER(router, connection, md5) {
    var self = this;
    self.handleRoutes(router, connection, md5);
}

REST_ROUTER.prototype.handleRoutes = function(router, connection, md5) {
    router.get("/", function(req, res) {
        res.json({
            "Usuario": {
                "GET  /api/usuario": "Lista todos os usuarios",
                "GET  /api/usuario/:deLogin": "Busca o usuario pelo login",
                "POST /api/usuario": "Insere um novo usuario",
                "PUT  /api/usuario": "Atualiza o usuario"
            },
            "Usuariologin" : {
                "PUT  /api/usuariologin": "Valida Usuario cadastrado"
            },
            "Sujeito": {
                "GET  /api/sujeito": "Lista todos os sujeitos",
                "GET  /api/sujeito/:deLogin": "Busca o sujeito pelo código",
                "POST /api/sujeito": "Insere um novo sujeito",
                "PUT  /api/sujeito": "Atualiza o sujeito"
            },
            "Usuariosujeito": {
                "POST /api/usuariosujeito": "Insere um novo usuario e sujeito"
            },
            "Municipio": {                
                "GET /api/municipio": "Busca todos os nunicipios",
                "GET /api/municipio/id/:cdMunicipio" : "Busca o municipio pelo Id",
                "GET /api/municipio/:nmMunicipio": "Busca todos os nunicipios pelo nome"
            }
        });
    });

    /* USUARIO */
    router.get("/usuario", function(req, res) {
        usuariodao.findAllUsuarios(connection, req, res);
    });
    router.get("/usuario/:deLogin", function(req, res) {
        usuariodao.findUsuariosByLogin(connection, req, res);
    });
    router.post("/usuario", function(req, res) {
        usuariodao.inserirUsuario(connection, req, res);
    });
    router.put("/usuario", function(req, res) {
        usuariodao.atualizarUsuario(connection, req, res);
    });
    router.delete("/usuario", function(req, res) {
        usuariodao.excluirUsuario(connection, req, res);
    });

    /* USUARIOLOGIN */
    router.put("/usuariologin", function(req, res) {
        usuariodao.validaUsuario(connection, req, res);
    });

    /* SUJEITO */
    router.get("/sujeito", function(req, res) {
        sujeitodao.findAllSujeitos(connection, req, res);
    });
    router.get("/sujeito/:deLogin", function(req, res) {
        sujeitodao.findAllSujeitoByLogin(connection, req, res);
    });
    router.post("/sujeito", function(req, res) {
        sujeitodao.inserirSujeito(connection, req, res);
    });
    router.put("/sujeito", function(req, res) {
        sujeitodao.atualizarSujeito(connection, req, res);
    });
    router.delete("/sujeito", function(req, res) {
        sujeitodao.excluirSujeito(connection, req, res);
    });

    /* usuariosujeito */
    router.post("/usuariosujeito", function(req, res) {
        sujeitodao.inserirSujeitoUsuario(connection, req, res);
    });

    /* municipios */
    router.get("/municipio", function(req, res) {
        municipiodao.findAllMunicipios(connection, req, res);
    });
    router.get("/municipio/:nmMunicipio", function(req, res) {
        municipiodao.findAllMunicipiosByNome(connection, req, res);
    });
    router.get("/municipio/id/:cdMunicipio", function(req, res) {
        municipiodao.findMunicipiosById(connection, req, res);
    });

}

module.exports = REST_ROUTER;
