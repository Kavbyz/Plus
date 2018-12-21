var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Component } from '@angular/core';
import { PlusModel } from '../../../models/plus/plus.model';
import { PlusSaveService } from '../../../services/plus/plusSave.service';
var PlusSaveFileComponent = /** @class */ (function () {
    function PlusSaveFileComponent(plusService) {
        this.plusService = plusService;
    }
    PlusSaveFileComponent.prototype.onClickSave = function () {
        if (this.isValidCount && this.isValidMatrix) {
            this.plusService.saveJson(this.plusModel);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", PlusModel)
    ], PlusSaveFileComponent.prototype, "plusModel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusSaveFileComponent.prototype, "isValidCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusSaveFileComponent.prototype, "isValidMatrix", void 0);
    PlusSaveFileComponent = __decorate([
        Component({
            selector: 'plusSaveFile',
            templateUrl: 'plusSaveFile.component.html',
            providers: [PlusSaveService]
        }),
        __metadata("design:paramtypes", [PlusSaveService])
    ], PlusSaveFileComponent);
    return PlusSaveFileComponent;
}());
export { PlusSaveFileComponent };
//# sourceMappingURL=plusSaveFile.component.js.map