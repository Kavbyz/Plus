import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlusOpenService {
    constructor(private httpClient: HttpClient) {

    }

    openJson(fileToUpload: File) {
        var url = window.URL.createObjectURL(fileToUpload);
        console.log(url);
        return this.httpClient.get(url);
    }
}