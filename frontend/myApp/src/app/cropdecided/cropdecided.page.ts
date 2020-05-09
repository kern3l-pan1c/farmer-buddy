import { Component, OnInit } from '@angular/core';
import {TabsPage} from "../tabs/tabs.page";
import {HttpClient} from "@angular/common/http";
import { Platform } from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import backend_url from '../configs'

@Component({
  selector: 'app-cropdecided',
  templateUrl: './cropdecided.page.html',
  styleUrls: ['./cropdecided.page.scss'],
})
export class CropdecidedPage implements OnInit {

  crop:string = ""
  soil:string = ""
  area:string = ""
  reverseGeocodingResults: string = ""
  cropList: any = []
  soilList: any = []

  constructor(
      public tabs: TabsPage,
      public http: HttpClient,
      public platform: Platform,
      public alert: AlertController
  ) {
    this.platform.ready().then(()=>{
      this.reverseGeocodingResults = this.tabs.reverseGeocodingResults;
      let requestBody = {
        'location': this.reverseGeocodingResults
      }
      this.http.post(backend_url+'/crop_list', requestBody).subscribe((response) => {
        this.cropList = response;
        console.log(this.cropList)
      });
      this.http.post(backend_url+'/soil_list', requestBody).subscribe((response) => {
        this.soilList = response;
        console.log(this.soilList)
      });
    })
    
   }

  ngOnInit() {
  }

  cropSureSend(){
    const { crop, soil, area } = this
    console.log(this.reverseGeocodingResults)
    let requestBody = {
      'crop': crop,
      'soil': soil,
      'area': area,
      'location': this.reverseGeocodingResults
    }
    console.log(this.reverseGeocodingResults)
    this.http.post(backend_url+'/yield/sure', requestBody).subscribe((response) => {
      this.showAlert('Prediction', response[crop])
    });
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })

    await alert.present()

  }
}
