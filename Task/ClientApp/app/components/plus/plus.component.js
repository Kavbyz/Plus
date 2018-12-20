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
import { PlusModel } from '../../models/plus/plus.model';
import { PlusService } from '../../services/plus/plus.service';
var PlusComponent = /** @class */ (function () {
    function PlusComponent(plusService) {
        this.plusService = plusService;
        this.valueCount = 0;
        this.valueMatrix = [];
        this.counts = [];
    }
    PlusComponent.prototype.onCheckMultiplicity = function (count) {
        if (count.valid) {
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
    PlusComponent.prototype.onSubmit = function (form) {
        if (form.valid) {
            var count = form.value["count"];
            var matrix = [];
            for (var i = 0; i < this.counts.length; i++) {
                matrix.push(form.value["matrix" + this.counts[i]]);
            }
            var plusModel = new PlusModel(count, matrix);
            this.plusService.checkPlus(plusModel).subscribe(function (data) { console.log(data); }, function (error) { return console.log(error); });
        }
    };
    PlusComponent.prototype.onClickRand = function (form) {
        this.valueMatrix = [];
        var buf = "";
        for (var i = 0; i < this.counts.length; i++) {
            for (var j = 0; j < this.counts.length; j++) {
                buf += (Math.floor(Math.random() * 2)).toString();
            }
            this.valueMatrix.push(buf);
            buf = "";
        }
    };
    PlusComponent = __decorate([
        Component({
            selector: 'plus',
            styles: ["\n        input.ng-touched.ng-invalid {border:solid red 2px;}\n        input.ng-touched.ng-valid {border:solid green 2px;}\n    "],
            templateUrl: 'plus.component.html',
            providers: [PlusService]
        }),
        __metadata("design:paramtypes", [PlusService])
    ], PlusComponent);
    return PlusComponent;
}());
export { PlusComponent };
//# sourceMappingURL=plus.component.js.map