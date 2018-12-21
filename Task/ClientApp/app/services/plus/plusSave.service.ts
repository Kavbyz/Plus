import { Injectable } from '@angular/core';
import { PlusModel } from '../../models/plus/plus.model';

@Injectable()
export class PlusSaveService {

    saveJson(plusModel: PlusModel) {
        var blob = new Blob([JSON.stringify(plusModel)], { type: 'application/json' });
        var url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.download = 'test.json';
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}