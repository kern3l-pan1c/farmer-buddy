import { Component, OnInit } from '@angular/core';
import {TabsPage} from "../tabs/tabs.page";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cropundecided',
  templateUrl: './cropundecided.page.html',
  styleUrls: ['./cropundecided.page.scss'],
})
export class CropundecidedPage implements OnInit {

  soil_type:string = ""
  season:string = ""
  reverseGeocodingResults: string = ""

  constructor(
      public tabs: TabsPage,
      public http: HttpClient
  ) {
    this.reverseGeocodingResults = this.tabs.reverseGeocodingResults;
   }

  ngOnInit() {
  }

  cropSureSend(){
    const { soil_type, season } = this
    console.log(this.reverseGeocodingResults)
    let requestBody = {
      'soil': soil_type,
      'season': season,
      'location': this.reverseGeocodingResults
    }
    console.log(this.reverseGeocodingResults)
    this.http.post('http://192.168.1.9:5000/yield/unsure', requestBody).subscribe((response) => {
      console.log(response);
    });
  }
}
