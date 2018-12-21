var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { PlusModel } from '../../../models/plus/plus.model';
var PlusMatrixComponent = /** @class */ (function () {
    function PlusMatrixComponent() {
        this.isValidMatrixChange = new EventEmitter();
    }
    PlusMatrixComponent.prototype.checkValid = function () {
        this.isValidMatrix = true;
        if (this.plusModel.count != this.plusModel.matrix.length)
            this.isValidMatrix = false;
        else {
            for (var i = 0; i < this.plusModel.matrix.length; i++) {
                if (!this.plusModel.matrix[i].match(this.patternMatrix)) {
                    this.isValidMatrix = false;
                    break;
                }
            }
        }
        this.isValidMatrixChange.emit(this.isValidMatrix);
    };
    __decorate([
        Input(),
        __metadata("design:type", PlusModel)
    ], PlusMatrixComponent.prototype, "plusModel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PlusMatrixComponent.prototype, "patternMatrix", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PlusMatrixComponent.prototype, "counts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusMatrixComponent.prototype, "isValidMatrix", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusMatrixComponent.prototype, "isValidMatrixChange", void 0);
    PlusMatrixComponent = __decorate([
        Component({
            selector: 'plusMatrix',
            styles: ["\n        input.ng-touched.ng-invalid {border:solid red 2px;}\n        input.ng-touched.ng-valid {border:solid green 2px;}\n    "],
            templateUrl: 'plusMatrix.component.html'
        })
    ], PlusMatrixComponent);
    return PlusMatrixComponent;
}());
export { PlusMatrixComponent };
//# sourceMappingURL=plusMatrix.component.js.map