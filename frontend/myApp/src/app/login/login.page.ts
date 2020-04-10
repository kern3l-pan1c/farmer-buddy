import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public alert: AlertController
  ) { }

  ngOnInit() {
  }

  async login(){
    const { username, password } = this

    try{
      const res = await this.afAuth.signInWithEmailAndPassword(username + "@test.com", password)
      console.log(res)
      this.router.navigate(['/tabs'])
    }catch(e){
      this.showAlert("Error!",e.message)
      console.dir(e)
    }
  }

  goToRegister(){
    this.router.navigate(['/register'])
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
