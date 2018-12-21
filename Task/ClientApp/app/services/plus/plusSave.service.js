var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var PlusSaveService = /** @class */ (function () {
    function PlusSaveService() {
    }
    PlusSaveService.prototype.saveJson = function (plusModel) {
        var blob = new Blob([JSON.stringify(plusModel)], { type: 'application/json' });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.download = 'test.json';
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    PlusSaveService = __decorate([
        Injectable()
    ], PlusSaveService);
    return PlusSaveService;
}());
export { PlusSaveService };
//# sourceMappingURL=plusSave.service.js.map