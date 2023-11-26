import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {EmailService} from "./services/email.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        EmailService
    ],
})
export class AppComponent {
  title = 'wedding';
}
