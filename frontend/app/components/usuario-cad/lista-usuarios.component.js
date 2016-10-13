"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var usuario_service_1 = require('../../services/usuario.service');
var municipio_component_1 = require('../municipio/municipio.component');
var router_1 = require('@angular/router');
var ListaUsuariosComponent = (function () {
    function ListaUsuariosComponent(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    ListaUsuariosComponent.prototype.ngOnInit = function () {
        this.listaUsuarios = new Array();
        this.submitted = false;
    };
    ListaUsuariosComponent.prototype.onSubmit = function () {
        this.submitted = false;
    };
    ListaUsuariosComponent.prototype.onNotifyMunicipio = function (municipio) {
        console.log("municipio: " + municipio.cdMunicipio + "; " + municipio.nmMunicipio + "; " + municipio.nmEstado);
        this.selectedMunicipio = municipio;
    };
    ListaUsuariosComponent = __decorate([
        core_1.Component({
            selector: 'lista-usuarios',
            templateUrl: 'app/components/usuario-cad/lista-usuarios.component.html',
            directives: [municipio_component_1.MunicipioComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, usuario_service_1.UsuarioService])
    ], ListaUsuariosComponent);
    return ListaUsuariosComponent;
}());
exports.ListaUsuariosComponent = ListaUsuariosComponent;
//# sourceMappingURL=lista-usuarios.component.js.map