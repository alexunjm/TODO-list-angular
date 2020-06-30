import { AbstractFactory, ToDoListFactory, Item } from './../../business';
import { Injectable } from '@angular/core';

const types = {
  BOOLEAN: '[object Boolean]',
  NUMBER: '[object Number]',
  STRING: '[object String]',
  DATE: '[object Date]',
};

const compareHelper = (x: any, y: any) => {
  try {
    const typeX = Object.prototype.toString.call(x);
    if (typeX !== Object.prototype.toString.call(y)) { return 0; }

    switch (typeX) {
      case types.BOOLEAN:
        return ((a: boolean, b: boolean): number => a && b ? 0 : (a ? -1 : 1))(x, y);

      case types.NUMBER:
        return ((a: number, b: number): number => a - b)(x, y);

      case types.STRING:
        return ((a: string, b: string): number => a < b ? -1 : 1)(x, y);

      case types.DATE:
        return ((a: Date, b: Date): number => a.getTime() - b.getTime())(x, y);

      default:
        return 0;
    }
  } catch (error) {
    console.log('compareHelper -> error', {error});
    return 0;
  }
};

@Injectable({
  providedIn: 'root'
})
export class ToDoListMockService {

  factory: AbstractFactory;
  initialData: Array<any>;

  constructor() {
    this.factory = new ToDoListFactory();
    this.initialData = ['test 1', 'test 2', 'test 3', 'test 4'].map(
      name => ({
        _id: name.split(' ').join(''),
        name,
        priority: Math.floor(Math.random() * 10),
        completed: Math.floor(Math.random() * 10) % 2 === 1,
        date: new Date(),
      })
    );
  }

  public createEmptyToDo(): Item {
    return this.factory.createItem({});
  }

  public getAll(): Promise<Item[]> {
    // return Promise.resolve(this.factory.createItemList(this.initialData));
    return Promise.resolve(this.sortItemList(this.factory.createItemList(this.initialData), 'priority|-1'));
  }

  public createToDo(elm: any, list2Update: Array<Item>): Promise<Item> {
    const item = this.factory.createItem({...elm, _id: [list2Update.length + 1, Math.floor(Math.random() * 1000)].join('_')});
    list2Update.splice(0, 0, item);
    return Promise.resolve(item);
  }

  public getToDoById(elmId: string, list: Array<Item>): Promise<Item> {
    return Promise.resolve(list.find((elm) => elm.getId() === elmId));
  }

  public updateToDo(elm: any, list2Update: Array<Item>): Promise<number> {
    const updatedElm = this.factory.createItem(elm);
    const index = list2Update.findIndex((e) => e.getId() === updatedElm.getId());
    console.log('----------ToDoListMockService -> updatedElm', {updatedElm, found: list2Update[index], index});
    return Promise.resolve(updatedElm).then(item => {
      list2Update[index] = item;
      return Promise.resolve(index);
    });
  }

  public deleteToDoById(elmId: string, list2Update: Array<Item>): Promise<number> {
    const index = list2Update.findIndex((e) => e.getId() === elmId);
    list2Update.splice(index, 1);
    return Promise.resolve(index);
  }

  public sortItemList(list: Item[], sortCol: string = 'updatedAt') {
    if (list.length === 0) { return list; }

    const [col, multiplier] = sortCol.split('|');
    const scale = multiplier ? Number(multiplier) : 1;
    return list.sort((a: Item, b: Item) => compareHelper(a.cloneToJson()[col], b.cloneToJson()[col]) * scale);
  }
}
