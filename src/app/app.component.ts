import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {ContactService} from "./services/contact.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        ContactService
    ],
})
export class AppComponent {
  title = 'wedding';
}
