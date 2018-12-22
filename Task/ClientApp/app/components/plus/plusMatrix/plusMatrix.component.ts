import { Input, Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { PlusModel } from '../../../models/plus/plus.model';

@Component({
    selector: 'plusMatrix',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    templateUrl: 'plusMatrix.component.html'
})
export class PlusMatrixComponent {

    @Input() plusModel: PlusModel;
    @Input() patternMatrix: string;
    @Input() counts: number[];
    @Input() isValidMatrix: boolean;
    @Output() isValidMatrixChange = new EventEmitter<boolean>();

    checkValid() {
        this.isValidMatrix = true;
        if (this.plusModel.count != this.plusModel.matrix.length)
            this.isValidMatrix = false;
        else {
            for (let i = 0; i < this.plusModel.matrix.length; i++) {
                if (this.plusModel.matrix[i]) {
                    if (!this.plusModel.matrix[i].match(this.patternMatrix)) {
                        this.isValidMatrix = false;
                        break;
                    }
                }
                else {
                    this.isValidMatrix = false;
                    break;
                }
            }
        }
        
        this.isValidMatrixChange.emit(this.isValidMatrix);
    }

}