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
            },
            "Upload": {
                "POST /api/upload" : "Upload de arquivos"
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

    /* upload de arquivos */
    router.get("/upload", function(req, res) {
        // create an incoming form object
        var form = new formidable.IncomingForm();

        // specify that we want to allow the user to upload multiple files in a single request
        form.multiples = true;

        // store all uploads in the /uploads directory
        form.uploadDir = path.join(__dirname, '/uploads');

        // every time a file has been uploaded successfully,
        // rename it to it's orignal name
        form.on('file', function(field, file) {
            fs.rename(file.path, path.join(form.uploadDir, file.name));
        });

        // log any errors that occur
        form.on('error', function(err) {
            console.log('An error has occured: \n' + err);
        });

        // once all the files have been uploaded, send a response to the client
        form.on('end', function() {
            res.end('success');
        });

        // parse the incoming request containing the form data
        form.parse(req);
    });
}

module.exports = REST_ROUTER;
