import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { PlusModel } from '../../models/plus/plus.model';
import { PlusService } from '../../services/plus/plus.service';

@Component({
    selector: 'plus',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    templateUrl: 'plus.component.html',
    providers: [PlusService]
})
export class PlusComponent {

    constructor(private plusService: PlusService) {

    }
    valueCount: number = 0;
    valueMatrix: string[] = [];
    patternMatrix: string;
    counts: number[] = [];
    isCounts: boolean;

    onCheckMultiplicity(count: NgModel) {
        if (count.valid) {
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

    onSubmit(form: NgForm) {
        if (form.valid) {
            let count: number = form.value["count"];
            let matrix: string[]=[];
            for (let i = 0; i < this.counts.length; i++) {              
                matrix.push(form.value["matrix" + this.counts[i]]);
            }
            let plusModel: PlusModel = new PlusModel(count, matrix);
            this.plusService.checkPlus(plusModel).subscribe((data: any) => { console.log(data); },
                error => console.log(error))
        }        
    }

    onClickRand(form: NgForm) {
        this.valueMatrix = [];
        let buf: string="";
        for (let i = 0; i < this.counts.length; i++) {
            
            for (let j = 0; j < this.counts.length; j++) {
                buf += (Math.floor(Math.random() * 2)).toString();
            }
            this.valueMatrix.push(buf);
            buf = "";
        }
    }
}