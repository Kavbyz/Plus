var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PlusModel } from '../../../models/plus/plus.model';
import { PlusCheckPlusService } from '../../../services/plus/plusCheckPlus.service';
var PlusFormComponent = /** @class */ (function () {
    function PlusFormComponent(plusService) {
        this.plusService = plusService;
        this.counts = [];
        this.result = "";
        var arrayEmpty = [];
        this.plusModel = new PlusModel(0, arrayEmpty);
    }
    PlusFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.isValidCount && this.isValidMatrix) {
            this.plusService.checkPlus(this.plusModel).subscribe(function (data) { _this.result = data; console.log(data); _this.isResult = true; }, function (error) { return console.log(error); });
        }
    };
    PlusFormComponent = __decorate([
        Component({
            selector: 'plusForm',
            templateUrl: 'plusForm.component.html',
            providers: [PlusCheckPlusService]
        }),
        __metadata("design:paramtypes", [PlusCheckPlusService])
    ], PlusFormComponent);
    return PlusFormComponent;
}());
export { PlusFormComponent };
//# sourceMappingURL=plusForm.component.js.map