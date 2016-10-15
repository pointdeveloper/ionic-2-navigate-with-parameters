import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Other } from '../other/other';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
navigate(){
    this.navCtrl.push(Other,{
            firstPassed: "value 1",
            secondPassed: "value 2"
          });
  }
}
