import {Page, Platform,NavController, NavParams,ViewController} from  'ionic-framework/ionic';
import {HomePage} from '../home/home';
@Page({
    templateUrl: 'build/pages/other/other.html',
})
 
export class OtherPage {
    constructor(platform: Platform, navParams: NavParams,nav:NavController,view:ViewController) {
        this.platform = platform;
        this.navParams = navParams;
        this.nav=nav;
        this.view = view;

        this.firstParam = navParams.get("firstPassed");
        this.secondParam = navParams.get("secondPassed");
        
    }

    goBack(){
        console.log("popping");
          this.nav.popTo(this.nav.getPrevious(this.view));
    }
}