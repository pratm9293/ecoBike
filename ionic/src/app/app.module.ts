import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Track } from '../pages/Track/Track';
import { Stats } from '../pages/Stats/Stats';
import { Profile } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { PingPage } from '../pages/ping/ping';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    Track,
    Stats,
    Profile,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Track,
    Stats,
    Profile,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
