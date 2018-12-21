import { Input, Component, Output, EventEmitter } from '@angular/core';
import { PlusModel } from '../../../models/plus/plus.model';
import { PlusSaveService } from '../../../services/plus/plusSave.service';

@Component({
    selector: 'plusSaveFile',
    templateUrl: 'plusSaveFile.component.html',
    providers: [PlusSaveService]
})
export class PlusSaveFileComponent {
    @Input() plusModel: PlusModel;
    @Input() isValidCount: boolean;
    @Input() isValidMatrix: boolean;
    constructor(private plusService: PlusSaveService) {

    }
    onClickSave() {   
        if (this.isValidCount && this.isValidMatrix) {
            this.plusService.saveJson(this.plusModel);
        }
    }
}