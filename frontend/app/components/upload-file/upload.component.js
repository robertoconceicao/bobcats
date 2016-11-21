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
var upload_service_1 = require('../../services/upload.service');
var UploadComponent = (function () {
    function UploadComponent(service) {
        this.service = service;
        this.service.progress.subscribe(function (data) {
            console.log('progress = ' + data);
        });
    }
    UploadComponent.prototype.onChange = function (event) {
        console.log('onChange');
        var files = event.srcElement.files;
        console.log(files);
        this.service.makeFileRequest('http://localhost:3000/api/upload', [], files).subscribe(function () {
            console.log('sent');
        });
    };
    UploadComponent = __decorate([
        core_1.Component({
            selector: 'upload',
            template: "\n\t  <div>\n\t    <input type=\"file\" (change)=\"onChange($event)\"/>\n\t  </div>\n\t",
            providers: [upload_service_1.UploadService]
        }), 
        __metadata('design:paramtypes', [upload_service_1.UploadService])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map