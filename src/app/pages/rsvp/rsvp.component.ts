import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RsvpForm} from "./rsvp-form";
import {EmailService} from "../../services/email.service";

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {

    public submitted = false;
    public model = new RsvpForm(
        "",
        "",
        true,
        "",
        ""
    );
    private emailService: EmailService;
    public constructor(
        emailService: EmailService
    ) {
        this.emailService = emailService;
    }

    onSubmit() {
        this.emailService.postMessage$(this.model).then(() => {
            this.submitted = true;
        });
    }
}
