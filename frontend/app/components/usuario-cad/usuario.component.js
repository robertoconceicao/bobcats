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
var sujeito_1 = require('../../classes/sujeito');
var municipio_1 = require('../../classes/municipio');
var usuario_service_1 = require('../../services/usuario.service');
var municipio_component_1 = require('../municipio/municipio.component');
var router_1 = require('@angular/router');
var UsuarioComponent = (function () {
    function UsuarioComponent(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
        this.generos = [{ value: 'F', name: 'Fêminino' }, { value: 'M', name: 'Masculino' }];
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        this.sujeito = new sujeito_1.Sujeito();
        this.sujeito.flSexo = 'F';
        this.selectedMunicipio = new municipio_1.Municipio();
        this.submitted = false;
    };
    UsuarioComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = false;
        this.sujeito.cdUsuario = localStorage.getItem("cdUsuario");
        this.sujeito.cdMunicipio = this.selectedMunicipio.cdMunicipio;
        this.sujeito.nmMunicipio = this.selectedMunicipio.nmMunicipio;
        console.log(this.sujeito.toString);
        this.usuarioService.saveSujeito(this.sujeito)
            .then(function (response) {
            console.log(response.json());
            if (response.json().Message == "Success") {
                _this.success = "Dados cadastrado com sucesso ...";
            }
            else {
                _this.error = "Erro ao salvar os dados";
            }
        })
            .catch(function (error) {
            _this.error = "Erro ao salvar os dados";
        });
    };
    UsuarioComponent.prototype.onNotifyMunicipio = function (municipio) {
        console.log("municipio: " + municipio.cdMunicipio + "; " + municipio.nmMunicipio + "; " + municipio.nmEstado);
        this.selectedMunicipio = municipio;
    };
    UsuarioComponent.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    };
    UsuarioComponent = __decorate([
        core_1.Component({
            selector: 'usuario-perfil',
            templateUrl: 'app/components/usuario-cad/usuario.component.html',
            directives: [municipio_component_1.MunicipioComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, usuario_service_1.UsuarioService])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=usuario.component.js.map