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
var router_1 = require('@angular/router');
var login_service_1 = require('../../services/login.service');
var NavbarComponent = (function () {
    function NavbarComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
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
    NavbarComponent.prototype.navega = function (url) {
        this.router.navigate([url]);
    };
    NavbarComponent.prototype.navegaParam = function (url) {
        this.cdUsuario = localStorage.getItem("cdUsuario");
        console.log("Roteando para " + url + " cdUsuario: " + this.cdUsuario);
        this.router.navigate([url, this.cdUsuario]);
    };
    Object.defineProperty(NavbarComponent.prototype, "getCdUsuario", {
        get: function () {
            this.cdUsuario = localStorage.getItem("cdUsuario");
            return this.cdUsuario;
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
            template: "   \n    <!-- Fixed navbar -->    \n    <nav class=\"navbar navbar-default\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n\n               \n                <a class=\"navbar-brand\" (click)=\"navegaParam('/dashboard')\" routerLinkActive=\"active\">BobCats</a>\n            </div>\n\n            <div id=\"navbar\" class=\"navbar-collapse collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    <li><a (click)=\"navegaParam('/mensagens')\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-weixin\">Mensagens</span></a></li>\n                    <li><a (click)=\"navegaParam('/dashboard')\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-home\">Dashboard</span></a></li>\n                    <li><a (click)=\"navega('/usuarios')\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-user\">Usuarios</span></a></li>\n                    <li><a (click)=\"navega('/municipio')\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-user\">Localizacao</span></a></li>\n                    <li><a (click)=\"navega('/login')\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-user\">Login</span></a></li>\n                    <li><a (click)=\"navega('/cad_usuario')\" routerLinkActive=\"active\" class=\"skel-layers-ignoreHref\"><span class=\"icon fa-user\">Novo Usu\u00E1rio</span></a></li>\n                </ul>\n\n                <ul class=\"nav navbar-nav navbar-right\">            \n                    <li><a class=\"btn btn-default btn-lg\" role=\"button\" (click)=\"doLogout()\">Logout</a></li>\n                </ul>\n            </div><!--/.nav-collapse -->\n        </div>    \n    </nav>\n    <br />\n    <br />\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map