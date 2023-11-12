import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MainEventComponent} from "./pages/main-event/main-event.component";
import {LodgingComponent} from "./pages/lodging/lodging.component";
import {RsvpComponent} from "./pages/rsvp/rsvp.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main-event', component: MainEventComponent },
  { path: 'lodging', component: LodgingComponent },
  { path: 'rsvp', component: RsvpComponent },
];
