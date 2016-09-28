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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
require('rxjs/add/operator/toPromise');
//https://jwt.io/introduction/
//http://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html
var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = 'http://localhost:3000/api/usuariologin'; //URL to web api
    }
    LoginService.prototype.login = function (usuario) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .put(this.loginUrl, JSON.stringify(usuario), { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            if (response.json().Usuarios.length > 0) {
                _this.usuarioLogado = response.json().Usuarios[0];
                localStorage.setItem('id_token', _this.geraIdToken(_this.usuarioLogado));
                _this.router.navigate(['/dashboard', _this.usuarioLogado.cdUsuario]);
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            return false;
        });
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occorred', error);
        return Promise.reject(error.message || error);
    };
    LoginService.prototype.canActivate = function () {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    };
    ;
    LoginService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        this.goTelaLogin();
    };
    ;
    LoginService.prototype.geraIdToken = function (usuario) {
        return JSON.stringify(usuario);
    };
    ;
    LoginService.prototype.getUsuarioLogado = function () {
        return this.usuarioLogado;
    };
    ;
    LoginService.prototype.goTelaLogin = function () {
        this.router.navigate(['/login']);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map