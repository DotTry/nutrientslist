import {Component} from '@angular/core';
import {OnsNavigator, onsNotification} from 'angular2-onsenui';
import {ItemService} from '../home/demos/item.service';
import {listService} from '../home/demos/shoppinglist.service';
import {Item} from '../home/demos/item.model';
//have the ability to clear cart. ability to save cart. (popup dialog)
@Component({
  selector: 'ons-page[temp]',
  template: `
    <div class="waiting">ANYYY...</div>
   `,
  styles: [`
    .waiting {
      text-align: center;
      font-size: 24px;
      margin: 100px auto 0;
    }
  `],
  providers: [ItemService, listService]
})
export class TempPage {
  animations = ['none', 'fade', 'slide', 'lift'];

  constructor(private _navigator : OnsNavigator) {
  }

  ngOnInit() {

  }
}

@Component({
  selector: 'animations',
  templateUrl: 'app/components/animations/animations.html',
})
export class Animations {
  animations = ['none', 'fade', 'slide', 'lift'];
  items: Item[];
  savedList: any[];
  totalFat: number;
  totalEnergy: number;
  totalCarbs: number;

  index: number = 1;
  constructor(private _navigator : OnsNavigator, private itemService: ItemService, private list: listService) {
    this.items = list.items;
    if( (localStorage.getItem('saved')===null) )
      this.savedList = [{}];
    else
      this.savedList = JSON.parse(localStorage.getItem('saved'));
  }

  push(animation) {
    this._navigator.element.pushPage(TempPage, { animation });
    setTimeout(() => this._navigator.element.popPage(), 1500);
  }

  ngOnInit() {
    this.list.calculate();
    this.totalFat = this.list.totalFat;
    this.totalEnergy = this.list.totalEnergy;
    this.totalCarbs = this.list.totalCarbs;
  }

  remove(item){
    this.list.remove(item);
    this.items = this.list.items;

    this.list.calculate();
    this.totalFat = this.list.totalFat;
    this.totalEnergy = this.list.totalEnergy;
    this.totalCarbs = this.list.totalCarbs;
  }

  prompt(){
    ons.notification.prompt('Save As?')
    .then(function(input) {
      var message = input ? 'Saved Current List as: ' + input : 'Entered nothing!';
      // this.savedList.push({name: input, list: this.items});
      ons.notification.alert(message);
    });

    this.savedList.push({name: this.index++, list: this.items});
    localStorage.setItem('saved', JSON.stringify(this.savedList));
  }

  changeList(item){
    this.list.items = item.list;
    this.items = item.list;

    this.list.calculate();
    this.totalFat = this.list.totalFat;
    this.totalEnergy = this.list.totalEnergy;
    this.totalCarbs = this.list.totalCarbs;
  }
}
