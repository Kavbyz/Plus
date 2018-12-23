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
        if (form.valid) {
            this.plusService.checkPlus(this.plusModel).subscribe(function (data) { _this.result = data; console.log(data); _this.isResult = true; }, function (error) { return console.log(error); });
        }
    };
    PlusFormComponent.prototype.onClickOpen = function (files) {
        var _this = this;
        this.plusService.openJson(files.item(0)).subscribe(function (data) {
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
            }
        }, function (error) { return alert("Неподходящий файл"); });
    };
    PlusFormComponent.prototype.onClickRand = function () {
        this.counts = [];
        var randomCount = Math.floor(Math.random() * 2001);
        this.patternMatrix = "^(";
        for (var i = 0; i < randomCount; i++) {
            this.patternMatrix += "[0-1]";
        }
        this.patternMatrix += "$)";
        this.plusModel.count = null;
        this.plusModel.matrix = [];
        this.isCounts = true;
        this.plusModel.count = randomCount;
        for (var i = 0; i < randomCount; i++) {
            this.counts.push(i);
        }
        var buf = "";
        for (var i = 0; i < randomCount; i++) {
            for (var j = 0; j < randomCount; j++) {
                buf += (Math.floor(Math.random() * 2)).toString();
            }
            this.plusModel.matrix.push(buf);
            buf = "";
        }
    };
    PlusFormComponent.prototype.onClickSave = function (form) {
        if (form.valid) {
            this.plusService.saveJson(this.plusModel);
        }
    };
    PlusFormComponent.prototype.onCheckMultiplicity = function (count) {
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
        }
        else {
            this.isCounts = false;
            this.counts = [];
            this.patternMatrix = null;
        }
    };
    PlusFormComponent = __decorate([
        Component({
            selector: 'plusForm',
            styles: ["\n        input.ng-invalid {border:solid red 2px;}\n        input.ng-valid {border:solid green 2px;}\n    "],
            templateUrl: 'plusForm.component.html',
            providers: [PlusCheckPlusService]
        }),
        __metadata("design:paramtypes", [PlusCheckPlusService])
    ], PlusFormComponent);
    return PlusFormComponent;
}());
export { PlusFormComponent };
//# sourceMappingURL=plusForm.component.js.map