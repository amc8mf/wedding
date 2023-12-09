import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-main-event',
  standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './main-event.component.html',
  styleUrl: './main-event.component.scss'
})
export class MainEventComponent {

}
