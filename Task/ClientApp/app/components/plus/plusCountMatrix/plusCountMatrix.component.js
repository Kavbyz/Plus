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
var PlusCountMatrixComponent = /** @class */ (function () {
    function PlusCountMatrixComponent() {
        this.plusModelChange = new EventEmitter();
        this.patternMatrixChange = new EventEmitter();
        this.countsChange = new EventEmitter();
        this.isCountsChange = new EventEmitter();
        this.isValidCountChange = new EventEmitter();
        this.isValidMatrixChange = new EventEmitter();
    }
    PlusCountMatrixComponent.prototype.onCheckMultiplicity = function (count) {
        if (count.valid) {
            this.plusModel.matrix = [];
            this.isCounts = true;
            this.counts = [];
            this.patternMatrix = "^(";
            for (var i = 0; i < count.value; i++) {
                this.patternMatrix += "[0-1]";
            }
            this.patternMatrix += "$)";
            for (var i = 0; i < count.value; i++) {
                this.counts.push(i);
            }
            this.isValidCount = true;
        }
        else {
            this.isCounts = false;
            this.counts = [];
            this.patternMatrix = null;
            this.isValidCount = false;
        }
        this.isValidMatrix = false;
        this.plusModelChange.emit(this.plusModel);
        this.patternMatrixChange.emit(this.patternMatrix);
        this.countsChange.emit(this.counts);
        this.isCountsChange.emit(this.isCounts);
        this.isValidCountChange.emit(this.isValidCount);
        this.isValidMatrixChange.emit(this.isValidMatrix);
    };
    __decorate([
        Input(),
        __metadata("design:type", PlusModel)
    ], PlusCountMatrixComponent.prototype, "plusModel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PlusCountMatrixComponent.prototype, "patternMatrix", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PlusCountMatrixComponent.prototype, "counts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusCountMatrixComponent.prototype, "isCounts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusCountMatrixComponent.prototype, "isValidCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusCountMatrixComponent.prototype, "isValidMatrix", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusCountMatrixComponent.prototype, "plusModelChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusCountMatrixComponent.prototype, "patternMatrixChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusCountMatrixComponent.prototype, "countsChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusCountMatrixComponent.prototype, "isCountsChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusCountMatrixComponent.prototype, "isValidCountChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusCountMatrixComponent.prototype, "isValidMatrixChange", void 0);
    PlusCountMatrixComponent = __decorate([
        Component({
            selector: 'plusCountMatrix',
            styles: ["\n        input.ng-touched.ng-invalid {border:solid red 2px;}\n        input.ng-touched.ng-valid {border:solid green 2px;}\n    "],
            templateUrl: 'plusCountMatrix.component.html'
        })
    ], PlusCountMatrixComponent);
    return PlusCountMatrixComponent;
}());
export { PlusCountMatrixComponent };
//# sourceMappingURL=plusCountMatrix.component.js.map