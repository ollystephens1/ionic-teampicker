import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Player } from '../../data/models/player.interface';
import { PlayerService } from '../../services/player.service';


@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage implements OnInit {
  team: { name: string, players: Player[]};

  constructor(
    private navParams: NavParams, 
    private alertCtrl: AlertController,
    private playerService: PlayerService) {}

  ngOnInit() {
    this.team = this.navParams.data;
  }

  addToSquad(selectedPlayer: Player) {
    const alert = this.alertCtrl.create({
      title: 'Add to squad',
      subTitle: 'Are you sure?',
      buttons: [
        {
          text: 'Hell yes!',
          handler: () => {
            this.playerService.addPlayerToSquad(selectedPlayer);
          }
        },
        {
          text: 'No thanks',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });

    alert.present();
  }

  removeFromSquad(player: Player) {
    this.playerService.removePlayerFromSquad(player);
  } 

  isInSquad(player: Player) { 
    return this.playerService.isSquadPlayer(player); 
  }
}
