import {Injectable} from '@angular/core';
import {Item} from './item.model';
import { Http } from '@angular/http';

@Injectable()
export class listService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  items: Item[] = [];
  list: any;
  isShow: boolean = true;

  currentItem: Item;
  totalFat: number;
  totalEnergy: number;
  totalCarbs: number;
  constructor() {
    this.items = (localStorage.getItem('shopping')===null) ? [] : JSON.parse(localStorage.getItem('shopping'));
    localStorage.setItem('shopping', JSON.stringify(this.items));
    this.calculate();
    }

    getDetails(item: Item): void{
      this.currentItem = item;
      // console.log(this.currentItem);
    }

    getAllItems(): Item[] {
      return this.items;
    }

    calculate() :void {
      this.totalFat = 0;
      this.totalEnergy = 0;
      this.totalCarbs = 0;
      for(var i in this.items){
        this.totalFat += Number(this.items[i].nutrients[0].value);
        this.totalEnergy += Number(this.items[i].nutrients[1].value);
        this.totalCarbs += Number(this.items[i].nutrients[2].value);
      }
    }

    // Simulate POST /todos
  addItem(item: Item): listService {
    this.items.push(item);
    localStorage.setItem('shopping', JSON.stringify(this.items));
    return this;
  }

  remove(input: Item): listService{
    this.items = this.items
      .filter(item => item.name !== input.name);
      localStorage.setItem('shopping', JSON.stringify(this.items));

      return this;
  }


}
