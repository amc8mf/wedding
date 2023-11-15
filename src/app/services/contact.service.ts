import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import emailJs from "@emailjs/browser";
@Injectable({
    providedIn: 'root',
})
export class ContactService {
    private baseUrl = "https://mail"
    constructor(private http: HttpClient) { }

    postMessage$(input: any) {
        emailJs.send(
            "service_s3vhsur",
            "template_l0p9hbw",
            {
                fullName: input.fullName,
                message: input.message
            }
        ).then(r => console.log(r))
    }

}
