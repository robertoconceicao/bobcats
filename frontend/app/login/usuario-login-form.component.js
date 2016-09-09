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
var login_service_1 = require('./login.service');
var angular2_jwt_1 = require('angular2-jwt');
var router_1 = require('@angular/router');
var UsuarioLoginFormComponent = (function () {
    function UsuarioLoginFormComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    UsuarioLoginFormComponent.prototype.ngOnInit = function () {
        this.usuario = new usuario_1.Usuario();
        this.submitted = false;
    };
    UsuarioLoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error = "";
        this.success = "";
        this.submitted = true;
        this.usuario.flAtivo = 1;
        this.loginService.login(this.usuario)
            .then(function (response) {
            console.log(response.json());
            if (response.json().Usuarios.length > 0) {
                _this.success = "Login sucesso ...";
                _this.usuarioLogado = response.json().Usuarios[0];
                localStorage.setItem('id_token', _this.geraIdToken(_this.usuarioLogado));
                _this.router.navigate(['/principal', _this.usuarioLogado.cdUsuario]);
            }
            else {
                _this.error = "Erro ao efetuar login, usuario/senha inválido";
                _this.submitted = false;
            }
        })
            .catch(function (error) {
            _this.error = "Erro ao efetuar login, usuario/senha inválido";
            _this.submitted = false;
        });
    };
    UsuarioLoginFormComponent.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    };
    ;
    UsuarioLoginFormComponent.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
    ;
    UsuarioLoginFormComponent.prototype.geraIdToken = function (usuario) {
        return JSON.stringify(usuario);
    };
    ;
    UsuarioLoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/login/usuario-login-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], UsuarioLoginFormComponent);
    return UsuarioLoginFormComponent;
}());
exports.UsuarioLoginFormComponent = UsuarioLoginFormComponent;
//# sourceMappingURL=usuario-login-form.component.js.map