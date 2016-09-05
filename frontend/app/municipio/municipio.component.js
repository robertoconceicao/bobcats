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
var municipio_service_1 = require('./municipio.service');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var router_1 = require('@angular/router');
var MunicipioComponent = (function () {
    function MunicipioComponent(router, municipioService) {
        this.router = router;
        this.municipioService = municipioService;
        this.searchTerms = new Subject_1.Subject();
    }
    MunicipioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.municipios = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.municipioService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    // Push a search term into the observable stream.
    MunicipioComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    MunicipioComponent.prototype.onSelectedMunicipio = function (municipio) {
        console.log("Chamando metodo: onSelectedMunicipio " + municipio);
        this.selectedMunicipio = municipio;
    };
    MunicipioComponent = __decorate([
        core_1.Component({
            selector: 'localizacao',
            templateUrl: 'app/municipio/municipio.component.html',
            styleUrls: ['app/municipio/municipio.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, municipio_service_1.MunicipioService])
    ], MunicipioComponent);
    return MunicipioComponent;
}());
exports.MunicipioComponent = MunicipioComponent;
//# sourceMappingURL=municipio.component.js.map