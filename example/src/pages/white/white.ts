import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowStatusBar } from "ionic-status-bar-decorators";
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-white',
  templateUrl: 'white.html',
})
@ShowStatusBar({ color: 'dark' })
export class WhitePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public statusBar: StatusBar
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhitePage');
  }

}
