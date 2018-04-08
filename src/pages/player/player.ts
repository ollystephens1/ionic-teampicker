import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {
  name: string;
  position: string;

  constructor(
    private viewCtrl: ViewController, 
    private navParams: NavParams) {}
  
  ionViewDidLoad() {
    this.name = this.navParams.get('name');
    this.position = this.navParams.get('position');
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
