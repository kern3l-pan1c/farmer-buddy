import { Component, OnInit } from '@angular/core';
import { TabsPage } from "../tabs/tabs.page";
import { HttpClient } from "@angular/common/http";
import backend_url from '../configs';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-fertilizer',
  templateUrl: './fertilizer.page.html',
  styleUrls: ['./fertilizer.page.scss'],
})
export class FertilizerPage implements OnInit {
  reverseGeocodingResults: string = ""

  constructor(
    public tabs: TabsPage,
    public http: HttpClient,
    public alert: AlertController
    ) {
      console.log(this.tabs.reverseGeocodingResults)
    this.reverseGeocodingResults = this.tabs.reverseGeocodingResults;
   }

  ngOnInit() {
  }

  getFertilizer(){
    let requestBody = {
      'location': this.reverseGeocodingResults
    }
    this.http.post(backend_url + '/fertilizer', requestBody).subscribe((response) => {
      console.log(response)
      this.showAlert('Prediction', response['message'])
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
