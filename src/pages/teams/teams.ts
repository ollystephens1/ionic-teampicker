import { Component, OnInit } from '@angular/core';
import { Player } from '../../data/models/player.interface';
import teams from '../../data/teams';
import { TeamPage } from '../team/team';


@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage implements OnInit {
  teamCollection: { name: string, players: Player[]}[];
  teamPage = TeamPage;

  constructor() { }

  ngOnInit() {
    this.teamCollection = teams;
  }
}
