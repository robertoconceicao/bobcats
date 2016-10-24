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
require('rxjs/add/operator/toPromise');
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.usuarioUrl = 'http://localhost:3000/api/usuario'; //URL to web api
        this.loginUrl = 'http://localhost:3000/api/usuariologin'; //URL to web api
        this.sujeitoUrl = 'http://localhost:3000/api/sujeito'; //URL to web api
    }
    UsuarioService.prototype.getUsuarios = function () {
        return this.http.get(this.usuarioUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UsuarioService.prototype.getDadosSujeito = function (deLogin) {
        var url = this.sujeitoUrl + "/" + deLogin;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().Sujeitos; })
            .catch(this.handleError);
    };
    UsuarioService.prototype.login = function (usuario) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .put(this.loginUrl, JSON.stringify(usuario), { headers: headers })
            .toPromise();
    };
    UsuarioService.prototype.save = function (usuario) {
        if (usuario.cdUsuario) {
            return this.put(usuario);
        }
        return this.post(usuario);
    };
    UsuarioService.prototype.saveSujeito = function (sujeito) {
        if (sujeito.nuSeqsujeito) {
            return this.putSujeito(sujeito);
        }
        return this.postSujeito(sujeito);
    };
    //Delete
    UsuarioService.prototype.delete = function (usuario) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var url = this.usuarioUrl + "/" + usuario.cdUsuario;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    //Add
    UsuarioService.prototype.post = function (usuario) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .post(this.usuarioUrl, JSON.stringify(usuario), { headers: headers })
            .toPromise();
        //.then(res => res.json())
        //.catch(this.handleError);
    };
    //Edit
    UsuarioService.prototype.put = function (usuario) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var url = this.usuarioUrl + "/" + usuario.cdUsuario;
        return this.http
            .put(url, JSON.stringify(usuario), { headers: headers })
            .toPromise();
    };
    //============= sujeito =================
    //Add
    UsuarioService.prototype.postSujeito = function (sujeito) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log("JSON.stringify(sujeito): " + JSON.stringify(sujeito));
        return this.http
            .post(this.sujeitoUrl, JSON.stringify(sujeito), { headers: headers })
            .toPromise();
    };
    //Edit
    UsuarioService.prototype.putSujeito = function (sujeito) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var url = this.sujeitoUrl + "/" + sujeito.nuSeqsujeito;
        return this.http
            .put(url, JSON.stringify(sujeito), { headers: headers })
            .toPromise();
    };
    UsuarioService.prototype.handleError = function (error) {
        console.error('An error occorred', error);
        return Promise.reject(error.message || error);
    };
    UsuarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map