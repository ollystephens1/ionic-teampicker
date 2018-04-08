import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Player } from '../../data/models/player.interface';
import { PlayerService } from '../../services/player.service';
import { PlayerPage } from '../player/player';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html',
})
export class RosterPage {
  players: Player[];

  constructor(
    private playerService: PlayerService,
    private settingsService: SettingsService,
    private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.players = this.playerService.getSquad();
  }

  onViewPlayer(player: Player) {
    const modal = this.modalCtrl.create(PlayerPage, player);
    modal.present();
    modal.onDidDismiss((playerRemoved: boolean) => {
      if (playerRemoved) {
        this.removeFromSquad(player);
      }
    });
  }

  removeFromSquad(player: Player) {
    this.playerService.removePlayerFromSquad(player);
    this.players = this.playerService.getSquad();
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'playerBackgroundAlt': 'playerBackground'
  }
}
