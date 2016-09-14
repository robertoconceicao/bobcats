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
var usuario_1 = require('../../classes/usuario');
var usuario_service_1 = require('../../services/usuario.service');
var router_1 = require('@angular/router');
var UsuarioCadFormComponent = (function () {
    function UsuarioCadFormComponent(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    UsuarioCadFormComponent.prototype.ngOnInit = function () {
        this.usuario = new usuario_1.Usuario();
        this.submitted = false;
    };
    UsuarioCadFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.usuario.flAtivo = 1;
        this.usuarioService.save(this.usuario)
            .then(function (success) {
            _this.success = "Salvo com sucesso, efetue o login";
        })
            .catch(function (error) {
            _this.error = "Erro ao criar usuário, favor tentar mais tarde.";
        });
    };
    Object.defineProperty(UsuarioCadFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.usuario) + "confirmasenha: " + this.confirmasenha;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioCadFormComponent.prototype.senhasIguais = function () {
        if (!!this.usuario.deSenha && !!this.confirmasenha) {
            return this.usuario.deSenha === this.confirmasenha;
        }
        return true;
    };
    UsuarioCadFormComponent = __decorate([
        core_1.Component({
            selector: 'usuario-cad-form',
            templateUrl: 'app/components/usuario-cad/usuario-cad-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, usuario_service_1.UsuarioService])
    ], UsuarioCadFormComponent);
    return UsuarioCadFormComponent;
}());
exports.UsuarioCadFormComponent = UsuarioCadFormComponent;
//# sourceMappingURL=usuario-cad-form.component.js.map