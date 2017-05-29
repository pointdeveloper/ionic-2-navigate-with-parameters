import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {
  public firstParam;
  public secondParam;

  constructor(public navCtrl: NavController, public navParams: NavParams){

    this.firstParam = navParams.get("firstPassed");
    this.secondParam = navParams.get("secondPassed");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }

}
