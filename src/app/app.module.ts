import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RosterPage } from '../pages/roster/roster';
import { TeamPage } from '../pages/team/team';
import { TeamsPage } from '../pages/teams/teams';
import { PlayerPage } from '../pages/player/player';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { PlayerService } from '../services/player.service';
import { SettingsService } from '../services/settings.service';

@NgModule({
  declarations: [
    MyApp,
    RosterPage,
    TeamPage,
    TeamsPage,
    PlayerPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RosterPage,
    TeamPage,
    TeamsPage,
    PlayerPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayerService,
    SettingsService
  ]
})
export class AppModule {}
