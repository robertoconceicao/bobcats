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
    <nav class="navbar navbar-fixed-top navbar-dark bg-success navbar-static-top">
            <ul class="topnav" id="myTopnav">
                <li><a href="#">Meu Perfil</a></li>
                <li><a href="#">Por perto</a></li>
                
                <li><a routerLink="/mensagens" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-weixin">Mensagens</span></a></li>
                <li><a routerLink="/dashboard" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-home">Dashboard</span></a></li>
                <li><a routerLink="/usuarios" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Usuarios</span></a></li>
                <li><a routerLink="/municipio" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Localizacao</span></a></li>
                <li><a routerLink="/login" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Login</span></a></li>
                <li><a routerLink="/cad_usuario" routerLinkActive="active" class="skel-layers-ignoreHref"><span class="icon fa-user">Novo Usuário</span></a></li>
                <li class="icon">
                <a href="javascript:void(0);" onclick="myFunction()">&#9776;</a>
                </li>
            </ul>
    </nav>
    <br />
    `
})
export class NavbarComponent {
    constructor(private loginService: LoginService) {
    }

    get authenticated() {
        return this.loginService.authenticated();
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