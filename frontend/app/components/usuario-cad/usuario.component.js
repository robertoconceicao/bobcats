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
var usuario_service_1 = require('../../services/usuario.service');
var router_1 = require('@angular/router');
var UsuarioComponent = (function () {
    function UsuarioComponent(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        this.sujeito = new sujeito_1.Sujeito();
        this.submitted = false;
    };
    UsuarioComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = false;
        this.usuarioService.saveSujeito(this.sujeito)
            .then(function (response) {
            console.log(response.json());
            if (response.json().Sujeito.length > 0) {
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
    UsuarioComponent = __decorate([
        core_1.Component({
            selector: 'usuario-perfil',
            templateUrl: 'app/components/usuario-cad/usuario.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, usuario_service_1.UsuarioService])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=usuario.component.js.map