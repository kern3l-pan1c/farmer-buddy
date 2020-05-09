import { Component, OnInit } from '@angular/core';
import { TabsPage } from "../tabs/tabs.page";
import { HttpClient } from "@angular/common/http";
import { Platform } from '@ionic/angular'
import backend_url from '../configs'

@Component({
  selector: 'app-cropundecided',
  templateUrl: './cropundecided.page.html',
  styleUrls: ['./cropundecided.page.scss'],
})
export class CropundecidedPage implements OnInit {

  soil: string = ""
  area: string = ""
  reverseGeocodingResults: string = ""
  soilList: any = []
  respArray: any = []

  constructor(
    public tabs: TabsPage,
    public http: HttpClient,
    public platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.reverseGeocodingResults = this.tabs.reverseGeocodingResults;
      let requestBody = {
        'location': this.reverseGeocodingResults
      }
      this.http.post(backend_url + '/soil_list', requestBody).subscribe((response) => {
        this.soilList = response;
        console.log(this.soilList)
      });
    })

  }

  ngOnInit() {
  }

  cropUnsureSend(){
    const { soil, area } = this
    console.log(this.reverseGeocodingResults)
    let requestBody = {
      'soil': soil,
      'area': area,
      'location': this.reverseGeocodingResults
    }
    console.log(this.reverseGeocodingResults)
    this.http.post(backend_url+'/yield/unsure', requestBody).subscribe((response) => {
      var resp_array = Object.entries(response).map(([type, value]) => ({type, value}));
      this.respArray = resp_array
    });
  }
}
