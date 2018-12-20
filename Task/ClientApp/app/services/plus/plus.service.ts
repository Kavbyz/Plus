import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlusModel } from '../../models/plus/plus.model';

@Injectable()
export class PlusService {
    private url = "http://localhost:44310/Home/Index";
    constructor(private httpClient: HttpClient) {

    }

    checkPlus(plusModel: PlusModel) {
        const body = { count: plusModel.count, matrix: plusModel.matrix };
        console.log(body);
        return this.httpClient.post(this.url, body);
    }
}