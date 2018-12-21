import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlusModel } from '../../models/plus/plus.model';

@Injectable()
export class PlusCheckPlusService {
    private url = "https://localhost:44310/Home/Index";
    private urlSave = "https://localhost:44310/Home/SaveFilePlus";
    constructor(private httpClient: HttpClient) {

    }

    checkPlus(plusModel: PlusModel) {
        return this.httpClient.post(this.url, plusModel);
    }

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

    openJson(fileToUpload: File) {
        var url = window.URL.createObjectURL(fileToUpload);
        console.log(url);
        return this.httpClient.get(url);
    }
}