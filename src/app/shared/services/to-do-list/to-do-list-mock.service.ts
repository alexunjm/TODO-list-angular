import { AbstractFactory, ToDoListFactory, Item } from './../../business';
import { Injectable } from '@angular/core';

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
    return Promise.resolve(this.factory.createItemList(this.initialData));
  }

  public createToDo(elm: any, list2Update: Array<Item>): Promise<Item> {
    const item = this.factory.createItem({...elm, _id: [elm.name.split(' ')[0], list2Update.length + 1].join('')});
    list2Update.push(item);
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
}
