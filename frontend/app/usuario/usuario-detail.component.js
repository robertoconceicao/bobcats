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
var router_1 = require('@angular/router');
var usuario_1 = require('../classes/usuario');
var usuario_service_1 = require('./usuario.service');
var UsuarioDetailComponent = (function () {
    function UsuarioDetailComponent(usuarioService, route) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    UsuarioDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.usuarioService.getUsuario(id)
                    .then(function (usuario) { return _this.usuario = usuario; });
            }
            else {
                _this.navigated = false;
                _this.usuario = new usuario_1.Usuario();
            }
        });
    };
    UsuarioDetailComponent.prototype.save = function () {
        var _this = this;
        this.usuarioService
            .save(this.usuario)
            .then(function (usuario) {
            _this.usuario = usuario; //saved hero, w/ id if new
            _this.goBack(usuario);
        })
            .catch(function (error) { return _this.error = error; }); //TODO: Display error message
    };
    UsuarioDetailComponent.prototype.goBack = function (savedUsuario) {
        if (savedUsuario === void 0) { savedUsuario = null; }
        this.close.emit(savedUsuario);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', usuario_1.Usuario)
    ], UsuarioDetailComponent.prototype, "usuario", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UsuarioDetailComponent.prototype, "close", void 0);
    UsuarioDetailComponent = __decorate([
        core_1.Component({
            selector: 'usuario-detail',
            templateUrl: 'app/usuario/usuario-detail.component.html'
        }), 
        __metadata('design:paramtypes', [usuario_service_1.UsuarioService, router_1.ActivatedRoute])
    ], UsuarioDetailComponent);
    return UsuarioDetailComponent;
}());
exports.UsuarioDetailComponent = UsuarioDetailComponent;
//# sourceMappingURL=usuario-detail.component.js.map