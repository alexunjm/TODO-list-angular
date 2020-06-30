import { Item, ToDoItem } from './todo/todo';


export interface AbstractFactory {
  createItemList(arr: Array<any>): Array<Item>;
  createItem(elm: any): Item;
}

export class ToDoListFactory implements AbstractFactory {

  list: Item[];

  createItemList(arr: [any]): Item[] {
    this.list = [];
    for (const elm of arr) {
      this.list.push(this.createItem(elm));
    }
    return this.list;
  }

  createItem(elm: any): Item {
    return new ToDoItem(elm);
  }
}
