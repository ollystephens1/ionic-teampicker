import { Component } from '@angular/core';
import { RosterPage } from '../roster/roster';
import { TeamsPage } from '../teams/teams';

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab tabIcon="football" [root]="teamsPage" tabTitle="Teams"></ion-tab>
      <ion-tab tabIcon="people" [root]="rosterPage" tabTitle="My squad"></ion-tab>
    </ion-tabs>
  `
})  
export class TabsPage {
  rosterPage = RosterPage;  
  teamsPage = TeamsPage;  
}