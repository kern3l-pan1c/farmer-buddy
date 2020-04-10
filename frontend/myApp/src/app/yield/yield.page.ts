import { Component, OnInit } from '@angular/core';
import { TabsPage } from '../tabs/tabs.page'

@Component({
  selector: 'app-yield',
  templateUrl: './yield.page.html',
  styleUrls: ['./yield.page.scss'],
})
export class YieldPage implements OnInit {
  reverseGeocodingResults: string = ""
  constructor(public tabs: TabsPage) {
    this.reverseGeocodingResults = this.tabs.reverseGeocodingResults;
   }

  ngOnInit() {
  }

}
