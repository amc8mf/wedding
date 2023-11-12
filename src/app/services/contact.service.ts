import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    private baseUrl = "https://mail"
    constructor(private http: HttpClient) { }

    postMessage$(input: any) {
        return this.http.post(this.baseUrl, input, )
    }

}
