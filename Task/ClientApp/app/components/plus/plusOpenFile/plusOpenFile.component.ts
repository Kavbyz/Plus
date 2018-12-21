import { Input, Component, Output, EventEmitter } from '@angular/core';
import { PlusModel } from '../../../models/plus/plus.model';
import { PlusOpenService } from '../../../services/plus/plusOpen.service';

@Component({
    selector: 'plusOpenFile',
    templateUrl: 'plusOpenFile.component.html',
    providers: [PlusOpenService]
})
export class PlusOpenFileComponent {

    constructor(private plusService: PlusOpenService) {

    }

    @Input() plusModel: PlusModel;
    @Input() patternMatrix: string;
    @Input() counts: number[];
    @Input() isCounts: boolean;
    fileToUpload: File = null;

    @Output() plusModelChange = new EventEmitter<PlusModel>();
    @Output() patternMatrixChange = new EventEmitter<string>();
    @Output() countsChange = new EventEmitter<number[]>();
    @Output() isCountsChange = new EventEmitter<boolean>();
    @Input() isValidMatrix: boolean;
    @Input() isValidCount: boolean;
    @Output() isValidMatrixChange = new EventEmitter<boolean>();
    @Output() isValidCountChange = new EventEmitter<boolean>();

    onClickOpen(files: FileList) {
        //console.log(files);
        this.fileToUpload = files.item(0);
        this.plusService.openJson(this.fileToUpload).subscribe((data: PlusModel) => {

            if (data.count && data.matrix) {
                this.plusModel.count = data.count;
                this.plusModel.matrix = data.matrix;

                this.isCounts = true;
                this.counts = [];
                this.patternMatrix = "^(";
                for (let i = 0; i < data.count; i++) {
                    this.patternMatrix += "[0-1]";
                }
                this.patternMatrix += "$)";

                for (let i = 0; i < data.count; i++) {
                    this.counts.push(i);
                }

                this.isValidMatrix = true;
                if (this.plusModel.count != this.plusModel.matrix.length) {
                    this.isValidMatrix = false;
                }                   
                else {
                    for (let i = 0; i < this.plusModel.matrix.length; i++) {
                        if (!this.plusModel.matrix[i].match(this.patternMatrix)) {
                            this.isValidMatrix = false;
                            break;
                        }
                    }
                }
                this.isValidCount = true;
                this.isValidMatrixChange.emit(this.isValidMatrix);
                this.plusModelChange.emit(this.plusModel);
                this.patternMatrixChange.emit(this.patternMatrix);
                this.countsChange.emit(this.counts);
                this.isValidCountChange.emit(this.isValidCount);
                this.isCountsChange.emit(this.isCounts);
            }
        },
            error => alert("Неподходящий файл"));
    }
    
}