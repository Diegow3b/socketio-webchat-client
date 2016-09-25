import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    user: string;

    constructor(public navCtrl: NavController) {
    }

    login(user){
         this.navCtrl.push(HomePage,{
             user: user
         });
    }

}
