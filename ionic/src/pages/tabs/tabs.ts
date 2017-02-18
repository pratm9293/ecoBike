import { Component } from '@angular/core';

import { Profile } from '../profile/profile';
import { Track } from '../Track/Track';
import { Stats } from '../Stats/Stats';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  // tab1Root: any = HomePage
  tab1Root: any = Profile;
  tab2Root: any = Track;
  tab3Root: any = Stats;

  constructor() {

  }
}
