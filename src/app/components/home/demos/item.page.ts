import {Component, Input} from '@angular/core';
import {OnsNavigator, Params} from 'angular2-onsenui';
import {onsNotification} from 'angular2-onsenui';

import {ItemService} from './item.service';
import {listService} from './shoppinglist.service';
import {Item} from './item.model';
// import {CartItemService} from './cart-item.service';
// import {Item} from './pokemon-details';


@Component({
  selector: 'ons-page[itemPage]',
  templateUrl: 'app/components/home/demos/item.page.html',
  styleUrls: ['app/components/home/demos/item-page.css'],
})
export class itemPage {
    item: Item;
    loaded: boolean = false;

    constructor(
    private navi: OnsNavigator,
    private params: Params,
    private itemService: ItemService,
    private shoppinglistService: listService
  ) {
    /**
     * Get the Pokemon that was pushed.
     */
    let tmp: any = params.data;
    this.item = tmp.item;
    this.loaded = true;
  }

  ngOnInit() {
  this.itemService.getDetails(this.item);

  }

  alert(item: Item) {
    this.shoppinglistService.addItem(item);
    onsNotification.alert('Added(' + item.name+ ') to cart!');
  }
}
