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
var PlusRandomCountAndMatrixComponent = /** @class */ (function () {
    function PlusRandomCountAndMatrixComponent() {
        this.plusModelChange = new EventEmitter();
        this.patternMatrixChange = new EventEmitter();
        this.countsChange = new EventEmitter();
        this.isCountsChange = new EventEmitter();
        this.isValidCountChange = new EventEmitter();
        this.isValidMatrixChange = new EventEmitter();
    }
    PlusRandomCountAndMatrixComponent.prototype.onClickRand = function () {
        var randomCount = Math.floor(Math.random() * 2001);
        this.plusModel.count = randomCount;
        this.counts = [];
        this.patternMatrix = "^(";
        for (var i = 0; i < randomCount; i++) {
            this.patternMatrix += "[0-1]";
        }
        this.patternMatrix += "$)";
        for (var i = 0; i < randomCount; i++) {
            this.counts.push(i);
        }
        this.plusModel.matrix = [];
        var buf = "";
        for (var i = 0; i < this.counts.length; i++) {
            for (var j = 0; j < this.counts.length; j++) {
                buf += (Math.floor(Math.random() * 2)).toString();
            }
            this.plusModel.matrix.push(buf);
            buf = "";
        }
        this.isCounts = true;
        this.isValidCount = true;
        this.isValidMatrix = true;
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
    ], PlusRandomCountAndMatrixComponent.prototype, "plusModel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PlusRandomCountAndMatrixComponent.prototype, "counts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PlusRandomCountAndMatrixComponent.prototype, "patternMatrix", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusRandomCountAndMatrixComponent.prototype, "isCounts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusRandomCountAndMatrixComponent.prototype, "isValidCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusRandomCountAndMatrixComponent.prototype, "isValidMatrix", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusRandomCountAndMatrixComponent.prototype, "plusModelChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusRandomCountAndMatrixComponent.prototype, "patternMatrixChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusRandomCountAndMatrixComponent.prototype, "countsChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusRandomCountAndMatrixComponent.prototype, "isCountsChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusRandomCountAndMatrixComponent.prototype, "isValidCountChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusRandomCountAndMatrixComponent.prototype, "isValidMatrixChange", void 0);
    PlusRandomCountAndMatrixComponent = __decorate([
        Component({
            selector: 'plusRandomCountAndMatrix',
            templateUrl: 'plusRandomCountAndMatrix.component.html'
        })
    ], PlusRandomCountAndMatrixComponent);
    return PlusRandomCountAndMatrixComponent;
}());
export { PlusRandomCountAndMatrixComponent };
//# sourceMappingURL=plusRandomCountAndMatrix.component.js.map