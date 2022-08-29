import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
export declare const Breakpoints: {
  XSmall: string;
  Small: string;
  Medium: string;
  Large: string;
  XLarge: string;
  Handset: string;
  Tablet: string;
  Web: string;
  HandsetPortrait: string;
  TabletPortrait: string;
  WebPortrait: string;
  HandsetLandscape: string;
  TabletLandscape: string;
  WebLandscape: string;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public commonservice:CommonserviceService) { }

  ngOnInit() {
  //   this.commonservice.observe(Breakpoints.HandsetLandscape)
  //     .subscribe(result => {

  //       if (result.matches) {
  //         console.log("screens matches HandsetLandscape");
  //       }

  // });
  
  }

}
