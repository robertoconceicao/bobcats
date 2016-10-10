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
var login_service_1 = require('../../services/login.service');
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
        this.submitted = true;
        this.usuario.flAtivo = 1;
        this.loginService.login(this.usuario)
            .then(function (response) {
            console.log(response.valueOf());
            if (!response.valueOf()) {
                _this.error = "Erro ao efetuar login, usuario/senha inválido";
                _this.submitted = false;
            }
            else {
                _this.cdUsuario = localStorage.getItem("cdUsuario");
                console.log("Roteando para dashboard cdUsuario: " + _this.cdUsuario);
                _this.router.navigate(['/dashboard', _this.cdUsuario]);
            }
        }).catch(function (error) {
            _this.error = "Erro ao efetuar login, usuario/senha inválido";
            _this.submitted = false;
        });
        /*
            .then(response => {
               console.log(response.json());
               if(response.json().Usuarios.length > 0){
                  this.success = "Login sucesso ...";
                  this.usuarioLogado = response.json().Usuarios[0] as Usuario;
    
                  localStorage.setItem('id_token', this.geraIdToken(this.usuarioLogado));
                  
                  this.router.navigate(['/dashboard', this.usuarioLogado.cdUsuario]);
               } else {
                  this.error = "Erro ao efetuar login, usuario/senha inválido";
                  this.submitted = false;
               }
            })
            .catch(error => {
                this.error = "Erro ao efetuar login, usuario/senha inválido";
                this.submitted = false;
            });
            */
    };
    UsuarioLoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/components/login/usuario-login-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], UsuarioLoginFormComponent);
    return UsuarioLoginFormComponent;
}());
exports.UsuarioLoginFormComponent = UsuarioLoginFormComponent;
//# sourceMappingURL=usuario-login-form.component.js.map