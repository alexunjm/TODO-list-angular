import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LStorageService } from '../storage/l-storage.service';
import { TaskListAbstract } from '../task-list-abstract';
import { Item, ToDoListFactory } from '../../business';
import { ApiService } from './api.service';

class TaskListService extends TaskListAbstract {

  constructor(private apiService: ApiService) {
    super(new ToDoListFactory());
  }

  getAll(): Promise<Item[]> {
    return this.apiService.get('to-do-list').then(response => {
      // return Promise.resolve(this.sortItemList(this.factory.createItemList(response['data']), 'priority|-1'));
      return Promise.resolve(
        this.factory.createItemList(response['data'])
      );

    }).catch(err => {
      console.log('TaskListService -> getAll -> err', {err});
      return Promise.resolve([]);
    });
  }

  createToDo(elm: any, list2Update: Item[]): Promise<Item> {
    return this.apiService.post('task/create', elm).then(response => {
      const item = this.factory.createItem(response['data']);
      list2Update.splice(0, 0, item);
      return Promise.resolve(item);
    }).catch(err => {
      console.log('TaskListService -> createToDo -> err', {err});
      return Promise.resolve(this.createEmptyToDo());
    });
  }

  getToDoById(id: string, list: Item[]): Promise<Item> {
    return this.apiService.get('task/get', {id}).then(response => {
      const item = this.factory.createItem(response['data']);
      return Promise.resolve(item);
    }).catch(err => {
      console.log('TaskListService -> getToDoById -> err', {err});
      return Promise.resolve(this.createEmptyToDo());
    });
  }

  updateToDo(elm: any, list2Update: Item[]): Promise<number> {
    return this.apiService.post('task/update', elm).then(response => {
      const item = this.factory.createItem(response['data']);
      list2Update.splice(0, 0, item);
      return Promise.resolve(0);
    }).catch(err => {
      console.log('TaskListService -> updateToDo -> err', {err});
      return Promise.resolve(-1);
    });
  }

  deleteToDoById(id: string, list: Item[]): Promise<number> {
    return this.apiService.post('task/delete', {id}).then(response => {
      const index = list.findIndex((e) => e.getId() === id);
      list.splice(index, 1);
      return Promise.resolve(index);
    }).catch(err => {
      console.log('TaskListService -> deleteToDoById -> err', {err});
      return Promise.resolve(-1);
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class ToDoListService extends ApiService {

  taskListService: TaskListService;

  constructor(http: HttpClient, lStorage: LStorageService) {
    super(http, lStorage);
    this.setAPIuri('http://localhost:3000');
    this.taskListService = new TaskListService(this);
  }

  createEmptyToDo() {
    return this.taskListService.createEmptyToDo();
  }

  getAll(): Promise<Item[]> {
    return this.taskListService.getAll();
  }
  createToDo(elm: any, list2Update: Item[]): Promise<Item> {
    return this.taskListService.createToDo(elm, list2Update);
  }
  getToDoById(elmId: string, list: Item[]): Promise<Item> {
    return this.taskListService.getToDoById(elmId, list);
  }
  updateToDo(elm: any, list2Update: Item[]): Promise<number> {
    return this.taskListService.updateToDo(elm, list2Update);
  }
  deleteToDoById(elmId: string, list: Item[]): Promise<number> {
    return this.taskListService.deleteToDoById(elmId, list);
  }
}
