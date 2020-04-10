import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx'
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { Platform } from '@ionic/angular'


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public reverseGeocodingResults: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public alert: AlertController,
    public geolocation: Geolocation,
    public geocoder: NativeGeocoder,
    public platform: Platform,
  ) {

      this.platform.ready().then(()=>{
        this.geolocation.getCurrentPosition().then((position)=>{
          var lat = position.coords.latitude;
          var longi = position.coords.longitude;
          console.log('here')
          console.log(lat + " " + longi)
          this.reverseGeocoding(lat, longi)
        }).catch((e)=>{
          console.log("error occurred")
          console.dir(e);
        })
      })
  }

  ngOnInit() {

  }

  reverseGeocoding(lat,longi){
    var options: NativeGeocoderOptions={
      useLocale: true,
      maxResults:1
    }
    this.geocoder.reverseGeocode(lat,longi,options).then((results)=>{
      this.reverseGeocodingResults = JSON.stringify(results[0]);
      console.log(this.reverseGeocodingResults)
    });
  }

  async logout(){
    try{
      const res = await this.afAuth.signOut()
      console.log(res)
      this.router.navigate(['/login'])
    }catch(e){
      this.showAlert("Error!",e.message)
      console.dir(e)
    }
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
