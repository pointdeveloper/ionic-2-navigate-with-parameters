import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/other/other.html'
})
export class OtherPage {

  public firstParam:any;
  public secondParam:any;

    constructor(public navCtrl: NavController,  params: NavParams) {
      this.firstParam = params.get("firstPassed");
      this.secondParam = params.get("secondPassed");
  }
}
