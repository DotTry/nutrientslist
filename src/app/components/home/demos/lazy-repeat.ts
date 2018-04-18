import {Component, ViewChild} from '@angular/core';
import { Http } from '@angular/http';
import {ItemService} from './item.service';
import {listService} from './shoppinglist.service';
import {Item} from './item.model';
import {OnsNavigator} from 'angular2-onsenui';
import {itemPage} from './item.page';


@Component({
  selector: 'ons-page[lazy-repeat]',
  templateUrl: 'app/components/home/demos/lazy-repeat.html',
  providers: [ItemService, listService]
})
export class LazyRepeat {
  loaded: boolean = false;

  constructor(private itemService: ItemService, private _navigator : OnsNavigator) {

    this.loaded = true;
  }

  @ViewChild('navi')
  private navi;

  get items() {
    return this.itemService.getAllItems();
  }

  removeTodo(item) {
    //this.itemService.deleteTodoById(todo.id);
    // console.log(this.itemService.items.length);
  }

  push(page: Item) {
    // var component = { PullHook, LazyRepeat, Splitter, Fab, SpeedDial }[page]; // What we need to do is with the 'name' of the item, we can find the entire item value
    // this.itemService.select(page);
    this._navigator.element.pushPage(itemPage,  {animation: 'fade ', data: {item: 'Page 2'}}, {})
  }

  push2(item: Item) {
    // var component = { PullHook, LazyRepeat, Splitter, Fab, SpeedDial }[page]; // What we need to do is with the 'name' of the item, we can find the entire item value
    // this.itemService.select(page);
    const data = {
      item
    };
    this.navi.nativeElement.pushPage(
      itemPage,
      {data}
    );
    // this._navigator.element.pushPage(itemPage,  {animation: 'fade ', data: {item: 'Page 2'}}, {})
  }


  ngOnInit() {

    for (var i = 0; i < 100; ++i) {
      // this.items.push(i);
    }
  }
}
