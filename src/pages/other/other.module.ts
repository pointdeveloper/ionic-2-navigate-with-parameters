import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherPage } from './other';

@NgModule({
  declarations: [
    OtherPage,
  ],
  imports: [
    IonicPageModule.forChild(OtherPage),
  ],
  exports: [
    OtherPage
  ]
})
export class OtherPageModule {}
