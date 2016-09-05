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
var usuario_1 = require('../classes/usuario');
var usuario_service_1 = require('./usuario.service');
var router_1 = require('@angular/router');
var UsuarioLoginFormComponent = (function () {
    function UsuarioLoginFormComponent(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    UsuarioLoginFormComponent.prototype.ngOnInit = function () {
        this.usuario = new usuario_1.Usuario();
        this.submitted = false;
    };
    UsuarioLoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.usuario.flativo = 1;
        this.usuarioService.login(this.usuario)
            .then(function (success) {
            _this.success = "Login sucesso ...";
        })
            .catch(function (error) {
            _this.error = "Erro ao efetuar login, usuario/senha inválido";
        });
    };
    UsuarioLoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/usuario/usuario-login-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, usuario_service_1.UsuarioService])
    ], UsuarioLoginFormComponent);
    return UsuarioLoginFormComponent;
}());
exports.UsuarioLoginFormComponent = UsuarioLoginFormComponent;
//# sourceMappingURL=usuario-login-form.component.js.map