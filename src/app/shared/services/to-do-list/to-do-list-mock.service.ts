import { AbstractFactory, ToDoListFactory, Item } from './../../business';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoListMockService {

  factory: AbstractFactory;
  list: Item[];

  constructor() {
    this.factory = new ToDoListFactory();
    const data = ['test 1', 'test 2', 'test 3', 'test 4'].map(
      name => ({
        _id: name.split(' ').join(''),
        name,
        priority: Math.floor(Math.random() * 10),
        completed: Math.floor(Math.random() * 10) % 2,
        date: new Date(),
      })
    );
    this.list = this.factory.createItemList(data);
  }

  public getAll(): Promise<Item[]> {
    return Promise.resolve(this.list);
  }

  public createToDo(elm: any): Promise<Item> {
    const item = this.factory.createItem(elm);
    this.list.push(item);
    return Promise.resolve(item);
  }

  public getToDoById(elmId: string): Promise<Item> {
    return Promise.resolve(this.list.find((elm, index) => elm.getId() === elmId));
  }

  public updateToDo(elm: Item): Promise<Item[]> {
    const index = this.list.findIndex((e, i) => e.getId() === elm.getId() ? i : -1);
    return Promise.resolve(this.factory.createItem(elm)).then(item => {
      this.list[index] = item;
      return Promise.resolve(this.list);
    });
  }

  public deleteToDoById(elmId: string): Promise<Item[]> {
    const index = this.list.findIndex((e, i) => e.getId() === elmId ? i : -1);
    this.list.splice(index, 1);
    return Promise.resolve(this.list);
  }
}
