//These first 3 lines will be deprecated by the final release
import {Component} from "@angular/core";
import { Router }  from '@angular/router';

import {LoginService} from '../../services/login.service';

@Component({
    selector: 'navbar',
    directives: [],
    providers: [],
    pipes: [],
    styleUrls: ['app/components/navbar/navbar.css'],
    template: `   
    <!-- Fixed navbar -->   
    <div *ngIf="authenticated">
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                
                    <a class="navbar-brand" (click)="navegaParam('/dashboard')" routerLinkActive="active">BobCats</a>
                </div>

                <div id="navbar" class="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a (click)="navegaParam('/mensagens')" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-weixin">Mensagens</span></a></li>
                        <li><a (click)="navegaParam('/dashboard')" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-home">Dashboard</span></a></li>
                        <li><a (click)="navega('/usuarios')" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Usuarios</span></a></li>
                        <li><a (click)="navega('/municipio')" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Localizacao</span></a></li>
                        <li><a (click)="navega('/login')" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Login</span></a></li>
                        <li><a (click)="navega('/cad_usuario')" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Novo Usuário</span></a></li>
                        <li><a (click)="navega('/fotos')" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Fotos</span></a></li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">            
                        <li><a class="btn btn-default" role="button" (click)="doLogout()">Logout</a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>    
        </nav>      
    </div>    
    `
})

export class NavbarComponent {

    cdUsuario: String;

    constructor(private loginService: LoginService, private router: Router) {
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

    navega(url){        
        this.router.navigate([url]);
    }

    navegaParam(url){
        this.cdUsuario = localStorage.getItem("cdUsuario");
        console.log("Roteando para "+url+" cdUsuario: "+this.cdUsuario);
        this.router.navigate([url, this.cdUsuario]);
    }
    get getCdUsuario(){
        this.cdUsuario = localStorage.getItem("cdUsuario");
        return this.cdUsuario;
    }

    get authenticated() {
        return localStorage.getItem("cdUsuario") != null;
    }
}