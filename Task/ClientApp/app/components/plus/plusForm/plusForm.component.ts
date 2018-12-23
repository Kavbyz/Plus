import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { PlusModel } from '../../../models/plus/plus.model';
import { PlusCheckPlusService } from '../../../services/plus/plusCheckPlus.service';
import { setTimeout } from 'timers';

@Component({
    selector: 'plusForm',    
    styles: [`
        input.ng-invalid {border:solid red 2px;}
        input.ng-valid {border:solid green 2px;}
    `],
    templateUrl: 'plusForm.component.html',
    providers: [PlusCheckPlusService]
})
export class PlusFormComponent {

    constructor(private plusService: PlusCheckPlusService) {
        let arrayEmpty: string[] = [];
        this.plusModel = new PlusModel(0, arrayEmpty);
    }
    plusModel: PlusModel; 
    patternMatrix: string;
    counts: number[] = [];
    isCounts: boolean;
    result: string = "";
    isResult: boolean;

    onSubmit(form: NgForm) {
        if (form.valid) {            
            this.plusService.checkPlus(this.plusModel).subscribe((data: string) => { this.result = data; console.log(data); this.isResult = true;},
                error => console.log(error))
        }        
    }

    onClickOpen(files: FileList) {
        this.plusService.openJson(files.item(0)).subscribe((data: PlusModel) => {

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
            }
        },
            error => alert("Неподходящий файл"));
    }

    onClickRand() {
        this.counts = [];
        let randomCount: number = Math.floor(Math.random() * 2001);
        this.patternMatrix = "^(";
        for (let i = 0; i < randomCount; i++) {
            this.patternMatrix += "[0-1]";
        }
        this.patternMatrix += "$)";
        this.plusModel.count = null;  
        this.plusModel.matrix = [];
        this.isCounts = true;
        
        this.plusModel.count = randomCount;   

        for (let i = 0; i < randomCount; i++) {
            this.counts.push(i);
        }
       
        let buf: string = "";
        for (let i = 0; i < randomCount; i++) {

            for (let j = 0; j < randomCount; j++) {
                buf += (Math.floor(Math.random() * 2)).toString();
            }
            this.plusModel.matrix.push(buf);
            buf = "";
        }        
    }

    onClickSave(form: NgForm) {
        if (form.valid) {
            this.plusService.saveJson(this.plusModel);
        }
    }

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
        }
        else {
            this.isCounts = false;
            this.counts = [];
            this.patternMatrix = null;
        }
    }
}