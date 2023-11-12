import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {LodgingComponent} from "./lodging/lodging.component";
import {RsvpComponent} from "./rsvp/rsvp.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'lodging', component: LodgingComponent },
  { path: 'rsvp', component: RsvpComponent },
];
