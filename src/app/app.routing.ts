import { Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
const app_routes : Routes = [
{path:'', pathMatch:'full', redirectTo: '/home'},
{path:'home', component:HomeComponent},
{path:'contact', component:ContactComponent},
{path:'products', component:ProductsComponent},
{path:'speakers', component:SpeakersComponent},
];
export const app_routing= RouterModule.forRoot(app_routes);



