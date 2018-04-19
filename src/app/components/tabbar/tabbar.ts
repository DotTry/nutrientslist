import {Component} from '@angular/core';
import {onsPlatform} from 'angular2-onsenui';

//Tabbar component is used to navigate through different menu pages.
@Component({
  selector: 'tabbar',
  templateUrl: 'app/components/tabbar/tabbar.html',
  styleUrls: ['app/components/tabbar/tabbar.css'],
})
export class Tabbar {
  tabs: Array<any>;
  material: boolean;

  constructor() { //define routing table to components
    this.tabs = [
      { path: 'home',       label: 'Home',       },
      // { path: 'forms',      label: 'Forms',      },
      // { path: 'dialogs',    label: 'Dialogs',    },
      { path: 'animations', label: 'Cart', },
    ];
    this.material = onsPlatform.isAndroid();
  }

  updateStyle(platform: string) {
    this.material = platform === 'android';
  }

}
