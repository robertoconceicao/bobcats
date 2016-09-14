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
//These first 3 lines will be deprecated by the final release
var core_1 = require("@angular/core");
var login_service_1 = require('../../services/login.service');
var NavbarComponent = (function () {
    function NavbarComponent(loginService) {
        this.loginService = loginService;
    }
    Object.defineProperty(NavbarComponent.prototype, "authenticated", {
        get: function () {
            return this.loginService.authenticated();
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.doLogin = function () {
        this.loginService.goTelaLogin();
    };
    NavbarComponent.prototype.doLogout = function () {
        this.loginService.logout();
    };
    Object.defineProperty(NavbarComponent.prototype, "userName", {
        get: function () {
            return this.loginService.getUsuarioLogado().deLogin;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            directives: [],
            providers: [],
            pipes: [],
            styleUrls: ['app/components/navbar/navbar.css'],
            template: "    \n    <nav class=\"navbar navbar-fixed-top navbar-dark bg-success navbar-static-top\">\n            <ul class=\"topnav\" id=\"myTopnav\">\n                <li><a href=\"#\">Meu Perfil</a></li>\n                <li><a href=\"#\">Por perto</a></li>\n                \n                <li><a routerLink=\"/mensagens\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-weixin\">Mensagens</span></a></li>\n                <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-home\">Dashboard</span></a></li>\n                <li><a routerLink=\"/usuarios\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-user\">Usuarios</span></a></li>\n                <li><a routerLink=\"/municipio\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-user\">Localizacao</span></a></li>\n                <li><a routerLink=\"/login\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-user\">Login</span></a></li>\n                <li><a routerLink=\"/cad_usuario\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-user\">Novo Usu\u00E1rio</span></a></li>\n                <li class=\"icon\">\n                <a href=\"javascript:void(0);\" onclick=\"myFunction()\">&#9776;</a>\n                </li>\n            </ul>\n    </nav>\n    <br />\n    "
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map