import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OtherPage} from '../other/other';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  navigate(){
    this.navCtrl.push(OtherPage,{
            firstPassed: "value 1",
            secondPassed: "value 2"
          });
  }
}
