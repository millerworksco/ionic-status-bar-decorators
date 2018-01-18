import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowStatusBar } from "ionic-status-bar-decorators";
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-green',
  templateUrl: 'green.html',
})
@ShowStatusBar({ color: 'light' })
export class GreenPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GreenPage');
  }

}
