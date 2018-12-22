var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PlusCheckPlusService = /** @class */ (function () {
    function PlusCheckPlusService(httpClient) {
        this.httpClient = httpClient;
        this.url = "https://localhost:44310/Home/Index";
        this.urlSave = "https://localhost:44310/Home/SaveFilePlus";
    }
    PlusCheckPlusService.prototype.checkPlus = function (plusModel) {
        return this.httpClient.post(this.url, plusModel);
    };
    PlusCheckPlusService.prototype.saveJson = function (plusModel) {
        var blob = new Blob([JSON.stringify(plusModel)], { type: 'application/json' });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.download = 'test.json';
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    PlusCheckPlusService.prototype.openJson = function (fileToUpload) {
        var url = window.URL.createObjectURL(fileToUpload);
        console.log(url);
        return this.httpClient.get(url);
    };
    PlusCheckPlusService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PlusCheckPlusService);
    return PlusCheckPlusService;
}());
export { PlusCheckPlusService };
//# sourceMappingURL=plusCheckPlus.service.js.map