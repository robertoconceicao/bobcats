"use strict";
var Sujeito = (function () {
    function Sujeito() {
    }
    Object.defineProperty(Sujeito.prototype, "toString", {
        get: function () {
            return "nuSeqsujeito: " + this.nuSeqsujeito + " usuario: " + this.cdUsuario + " municipio: " + this.nmMunicipio + " flSexo: " + this.flSexo;
        },
        enumerable: true,
        configurable: true
    });
    return Sujeito;
}());
exports.Sujeito = Sujeito;
//# sourceMappingURL=sujeito.js.map