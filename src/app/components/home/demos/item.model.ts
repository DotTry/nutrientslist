export class Item {

  // id: number;
  name: string = '';
  serving: string = '';
  weight: string = '';
  nutrients: string[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
