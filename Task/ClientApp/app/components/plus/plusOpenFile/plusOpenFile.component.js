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
import { PlusOpenService } from '../../../services/plus/plusOpen.service';
var PlusOpenFileComponent = /** @class */ (function () {
    function PlusOpenFileComponent(plusService) {
        this.plusService = plusService;
        this.fileToUpload = null;
        this.plusModelChange = new EventEmitter();
        this.patternMatrixChange = new EventEmitter();
        this.countsChange = new EventEmitter();
        this.isCountsChange = new EventEmitter();
        this.isValidMatrixChange = new EventEmitter();
        this.isValidCountChange = new EventEmitter();
    }
    PlusOpenFileComponent.prototype.onClickOpen = function (files) {
        var _this = this;
        //console.log(files);
        this.fileToUpload = files.item(0);
        this.plusService.openJson(this.fileToUpload).subscribe(function (data) {
            if (data.count && data.matrix) {
                _this.plusModel.count = data.count;
                _this.plusModel.matrix = data.matrix;
                _this.isCounts = true;
                _this.counts = [];
                _this.patternMatrix = "^(";
                for (var i = 0; i < data.count; i++) {
                    _this.patternMatrix += "[0-1]";
                }
                _this.patternMatrix += "$)";
                for (var i = 0; i < data.count; i++) {
                    _this.counts.push(i);
                }
                _this.isValidMatrix = true;
                if (_this.plusModel.count != _this.plusModel.matrix.length) {
                    _this.isValidMatrix = false;
                }
                else {
                    for (var i = 0; i < _this.plusModel.matrix.length; i++) {
                        if (!_this.plusModel.matrix[i].match(_this.patternMatrix)) {
                            _this.isValidMatrix = false;
                            break;
                        }
                    }
                }
                _this.isValidCount = true;
                _this.isValidMatrixChange.emit(_this.isValidMatrix);
                _this.plusModelChange.emit(_this.plusModel);
                _this.patternMatrixChange.emit(_this.patternMatrix);
                _this.countsChange.emit(_this.counts);
                _this.isValidCountChange.emit(_this.isValidCount);
                _this.isCountsChange.emit(_this.isCounts);
            }
        }, function (error) { return alert("Неподходящий файл"); });
    };
    __decorate([
        Input(),
        __metadata("design:type", PlusModel)
    ], PlusOpenFileComponent.prototype, "plusModel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PlusOpenFileComponent.prototype, "patternMatrix", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], PlusOpenFileComponent.prototype, "counts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusOpenFileComponent.prototype, "isCounts", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusOpenFileComponent.prototype, "plusModelChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusOpenFileComponent.prototype, "patternMatrixChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusOpenFileComponent.prototype, "countsChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusOpenFileComponent.prototype, "isCountsChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusOpenFileComponent.prototype, "isValidMatrix", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlusOpenFileComponent.prototype, "isValidCount", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusOpenFileComponent.prototype, "isValidMatrixChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlusOpenFileComponent.prototype, "isValidCountChange", void 0);
    PlusOpenFileComponent = __decorate([
        Component({
            selector: 'plusOpenFile',
            templateUrl: 'plusOpenFile.component.html',
            providers: [PlusOpenService]
        }),
        __metadata("design:paramtypes", [PlusOpenService])
    ], PlusOpenFileComponent);
    return PlusOpenFileComponent;
}());
export { PlusOpenFileComponent };
//# sourceMappingURL=plusOpenFile.component.js.map