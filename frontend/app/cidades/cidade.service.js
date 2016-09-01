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
require('../rxjs-extensions');
var CidadeService = (function () {
    function CidadeService(http) {
        this.http = http;
        this.estadoUrl = 'http://localhost:8081/api/estados'; //URL to web api
        this.cidadeUrl = 'http://localhost:8081/api/cidades'; //URL to web api
    }
    CidadeService.prototype.getEstados = function () {
        return this.http.get(this.estadoUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CidadeService.prototype.getCidades = function (estado) {
        //let url = `${this.cidadeUrl}/${estado.codigo}`;
        return this.http.get(this.cidadeUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CidadeService.prototype.handleError = function (error) {
        console.log('An error occorred: ' + error);
        return Promise.reject(error.message || error);
    };
    CidadeService.prototype.search = function (term) {
        return this.http
            .get(this.cidadeUrl + "/" + term)
            .map(function (r) { return r.json(); });
    };
    CidadeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CidadeService);
    return CidadeService;
}());
exports.CidadeService = CidadeService;
//# sourceMappingURL=cidade.service.js.map