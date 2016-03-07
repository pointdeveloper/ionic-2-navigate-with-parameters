import {Page,Platform, NavController,ViewController} from  'ionic-framework/ionic';
import {OtherPage} from '../other/other';
@Page({
 templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  constructor(platform: Platform, nav: NavController) {
        this.platform = platform;
        this.nav = nav;
}

      navigate() {
        console.log("Here we go!!");
        this.nav.push(OtherPage, {
            firstPassed: "value 1",
            secondPassed: "value 2"
        });

    }

}
