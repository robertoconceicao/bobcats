//These first 3 lines will be deprecated by the final release
import {Component} from "@angular/core";

import {LoginService} from '../../services/login.service';

@Component({
    selector: 'navbar',
    directives: [],
    providers: [],
    pipes: [],
    styleUrls: ['app/components/navbar/navbar.css'],
    template: `
        
    <!-- Fixed navbar -->    
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" routerLink="/dashboard" routerLinkActive="active">BobCats</a>
            </div>

            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a routerLink="/mensagens" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-weixin">Mensagens</span></a></li>
                    <li><a routerLink="/dashboard" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-home">Dashboard</span></a></li>
                    <li><a routerLink="/usuarios" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Usuarios</span></a></li>
                    <li><a routerLink="/municipio" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Localizacao</span></a></li>
                    <li><a routerLink="/login" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Login</span></a></li>
                    <li><a routerLink="/cad_usuario" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Novo Usuário</span></a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right">            
                    <li><a class="btn btn-default btn-lg" role="button" (click)="doLogout()">Logout</a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>    
    </nav>
    <br />
    `
})

export class NavbarComponent {

    constructor(private loginService: LoginService) {
    } 

    doLogin() {
        this.loginService.goTelaLogin();
    }

    doLogout() {
        this.loginService.logout();
    }

    get userName() {
        return this.loginService.getUsuarioLogado().deLogin;
    }
}