import { Injectable } from '@angular/core';
import emailJs from "@emailjs/browser";
import {Observable, of} from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class EmailService {
    private baseUrl = "https://mail"
    private pubKey = "dIL-mFJhcvYUGVYfs";
    constructor() {
        emailJs.init(this.pubKey);
    }

    async postMessage$(input: any): Promise<any> {
        console.log(input);
        // await emailJs.send(
        //     "service_s3vhsur",
        //     "template_4dlyj64",
        //     {
        //         email: input.email,
        //         name: input.name,
        //         willAttend: input.willAttend,
        //         additionalGuests: input.additionalGuests,
        //         dietaryRestrictions: input.dietaryRestrictions
        //     },
        // )
    }

}
