import { Input, Component, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { PlusModel } from '../../../models/plus/plus.model';

@Component({
    selector: 'plusCountMatrix',
    styles: [`
        input.ng-invalid {border:solid red 2px;}
        input.ng-valid {border:solid green 2px;}
    `],
    templateUrl: 'plusCountMatrix.component.html'
})
export class PlusCountMatrixComponent {

    @Input() plusModel: PlusModel;
    @Input() patternMatrix: string;
    @Input() counts: number[];
    @Input() isCounts: boolean;
    @Input() isValidCount: boolean;
    @Input() isValidMatrix: boolean;

    @Output() plusModelChange = new EventEmitter<PlusModel>();
    @Output() patternMatrixChange = new EventEmitter<string>();
    @Output() countsChange = new EventEmitter<number[]>();
    @Output() isCountsChange = new EventEmitter<boolean>();
    @Output() isValidCountChange = new EventEmitter<boolean>();
    @Output() isValidMatrixChange = new EventEmitter<boolean>();

    onCheckMultiplicity(count: NgModel) {
        if (count.valid) {
            this.plusModel.matrix = [];
            this.isCounts = true;
            this.counts = [];
            this.patternMatrix = "^(";
            for (let i = 0; i < count.value; i++) {
                this.patternMatrix += "[0-1]";
            }
            this.patternMatrix += "$)";

            for (let i = 0; i < count.value; i++) {
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
    }
}

