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
}