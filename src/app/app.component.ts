import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   logoImagePath: string;
   bannerImagePath: string;
   fullHeight: any;

  constructor() {
    this.logoImagePath = '../assets/images/logo.png'
    this.bannerImagePath = '../assets/images/banner_img.jpg'
    this.fullHeight = window.screen.height;
    
   }

  ngOnInit() {
  }

  
}
