import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlusModel } from '../../../models/plus/plus.model';
import { PlusCheckPlusService } from '../../../services/plus/plusCheckPlus.service';

@Component({
    selector: 'plusForm',    
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
    isValidCount: boolean;
    isValidMatrix: boolean;
    result: string = "";
    isResult: boolean;

    onSubmit(form: NgForm) {
        if (this.isValidCount && this.isValidMatrix) {            
            this.plusService.checkPlus(this.plusModel).subscribe((data: string) => { this.result = data; console.log(data); this.isResult = true;},
                error => console.log(error))
        }        
    }
}