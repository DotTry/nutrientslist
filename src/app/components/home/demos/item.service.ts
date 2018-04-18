import {Injectable} from '@angular/core';
import {Item} from './item.model';
import { Http } from '@angular/http';

export interface Data{

}

@Injectable()
export class ItemService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  items: Item[] = [];
  list: any;
  isShow: boolean = true;

  currentItem: Item;

  constructor(private http: Http) {
    // this.http.get('https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=8YgFco8agghIYCaPl1ycjBJJ1aOhHeBmutneZl3x&nutrients=205&nutrients=204&nutrients=208').subscribe((data) => {
    //   //map api data with our own data structures
    //   let x;
    //   console.log(data);
    // });
    if( (localStorage.getItem('items')===null) ){

    this.http.get('https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=8YgFco8agghIYCaPl1ycjBJJ1aOhHeBmutneZl3x&nutrients=205&nutrients=204&nutrients=208')
               .subscribe(
        data => {
            for(let i in data.json().report.foods){


                  let item: Item = new Item();
                  item.name = data.json().report.foods[i].name;
                  item.weight = data.json().report.foods[i].weight;
                  item.serving = data.json().report.foods[i].measure;
                  item.nutrients = data.json().report.foods[i].nutrients;

                  this.items.push(item);
            }
            console.log(data.json().report.foods);
            this.list = data;
            this.isShow = false;
            localStorage.setItem('items', JSON.stringify(this.items));
        },
        error => console.log(error),
        () => console.log("done")
    );

    }
  else
    this.items = JSON.parse(localStorage.getItem('items'));

      // for(x in data.report.foods){
      //     console.log(data.report.foods[x].name);
      //
      //
      //     let item: Item = new Item();
      //     item.name = data.report.foods[x].name;
      //     item.serving = data.report.foods[x].measure;
      //     item.nutrients = data.report.foods[x].nutrients;
      //
      //     this.items.push(item);
      //     }
      // console.log(data.list.item);

    }

    getDetails(item: Item): void{
      this.currentItem = item;
      console.log(this.currentItem);
    }

    getAllItems(): Item[] {
      return this.items;
    }


}
