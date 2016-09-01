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
var cidade_service_1 = require('./cidade.service');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var router_1 = require('@angular/router');
var CidadeComponent = (function () {
    function CidadeComponent(router, cidadeService) {
        this.router = router;
        this.cidadeService = cidadeService;
        this.searchTerms = new Subject_1.Subject();
    }
    CidadeComponent.prototype.getEstados = function () {
        var _this = this;
        console.log("chamando metodo getEstados");
        this.cidadeService.getEstados().then(function (estados) { return _this.estados = estados; });
    };
    CidadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cidades = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.cidadeService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    // Push a search term into the observable stream.
    CidadeComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    CidadeComponent.prototype.onSelectedCidade = function (cidade) {
        this.selectedCidade = cidade;
    };
    CidadeComponent = __decorate([
        core_1.Component({
            selector: 'cidade-estado',
            templateUrl: 'app/cidades/cidade.component.html',
            styleUrls: ['app/cidades/cidade.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, cidade_service_1.CidadeService])
    ], CidadeComponent);
    return CidadeComponent;
}());
exports.CidadeComponent = CidadeComponent;
//# sourceMappingURL=cidade.component.js.map