"use strict";
var usuario_1 = require('./usuario');
var municipio_1 = require('./municipio');
var Sujeito = (function () {
    function Sujeito() {
        this.usuario = new usuario_1.Usuario();
        this.municipio = new municipio_1.Municipio();
    }
    return Sujeito;
}());
exports.Sujeito = Sujeito;
//# sourceMappingURL=sujeito.js.map