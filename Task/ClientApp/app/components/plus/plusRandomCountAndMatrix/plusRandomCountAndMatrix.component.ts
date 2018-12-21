import { Input, Component, Output, EventEmitter } from '@angular/core';
import { PlusModel } from '../../../models/plus/plus.model';

@Component({
    selector: 'plusRandomCountAndMatrix',
    templateUrl: 'plusRandomCountAndMatrix.component.html'
})
export class PlusRandomCountAndMatrixComponent {
    @Input() plusModel: PlusModel;
    @Input() counts: number[];
    @Input() patternMatrix: string;
    @Input() isCounts: boolean;
    @Input() isValidCount: boolean;
    @Input() isValidMatrix: boolean;

    @Output() plusModelChange = new EventEmitter<PlusModel>();
    @Output() patternMatrixChange = new EventEmitter<string>();
    @Output() countsChange = new EventEmitter<number[]>();
    @Output() isCountsChange = new EventEmitter<boolean>();
    @Output() isValidCountChange = new EventEmitter<boolean>();
    @Output() isValidMatrixChange = new EventEmitter<boolean>();

    onClickRand() {
        let randomCount: number = Math.floor(Math.random() * 2001);
        this.plusModel.count = randomCount;
        this.counts = [];
        this.patternMatrix = "^(";
        for (let i = 0; i < randomCount; i++) {
            this.patternMatrix += "[0-1]";
        }
        this.patternMatrix += "$)";

        for (let i = 0; i < randomCount; i++) {
            this.counts.push(i);
        }
        this.plusModel.matrix = [];
        let buf: string = "";
        for (let i = 0; i < this.counts.length; i++) {

            for (let j = 0; j < this.counts.length; j++) {
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
    }
}