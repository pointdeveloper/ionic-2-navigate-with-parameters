import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Other } from '../pages/other/other';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Other
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Other
  ],
  providers: []
})
export class AppModule {}
