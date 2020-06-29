import { Component, OnInit } from '@angular/core';

import { EditableItem } from './../../shared/business';
import { Item } from 'src/app/shared/business';
import { NmbToArr } from './../../shared/pipes/format/format';
import { ToDoListMockService } from './../../shared/services';

@Component({
  templateUrl: './user.component.html',
  styles: [],
  providers: [NmbToArr]
})
export class UserComponent implements OnInit {

  toDoList: Array<Item>;
  editable: {title: string, item: any};

  constructor(private toDoListService: ToDoListMockService) {
    this.toDoListService.getAll().then(list => this.toDoList = list);
    this.hideModal();
  }

  ngOnInit(): void {/*
    const sampleFrom2 = this.toDoList[2].cloneToJson();

    Promise.resolve().then(() => {
      return this.toDoListService.createToDo(sampleFrom2, this.toDoList);
    }).then((createdItem) => {
      console.log('UserComponent -> ngOnInit -> createToDo', {createdItem});
      return this.toDoListService.getToDoById(this.toDoList[0].getId(), this.toDoList);
    }).then((found) => {
      console.log('UserComponent -> ngOnInit -> getToDoById', {found});

      // const lastItem = this.toDoList[this.toDoList.length - 1];
      const lastItem = this.toDoList[1];
      console.log('UserComponent -> ngOnInit -> lastItem', {lastItem, list: this.toDoList});

      return this.toDoListService.updateToDo(
        {...lastItem, _id: lastItem.getId(), name: `(updated) test ${this.toDoList.length}`},
        this.toDoList
      );
    }).then(index => {
      console.log('UserComponent -> ngOnInit -> updateToDo', {index, list: this.toDoList});
      return this.toDoListService.deleteToDoById(
        this.toDoList[2].getId(),
        this.toDoList
      );
    }).then(index => {
      console.log('UserComponent -> ngOnInit -> deleteToDoById', {index, list: this.toDoList});
    }); */
  }

  hideModal() {
    this.editable = {title: null, item: null};
  }

  handleCreate() {
    this.editable = {title: 'Editar tarea', item: this.toDoListService.createEmtpyToDo().cloneToJson()};
    console.log({item: this.editable.item});
  }

  handleEdit(item: Item) {
    console.log({item});
    this.editable = {title: 'Editar tarea', item: item.cloneToJson()};
  }

  editItemDate(strDate: string) {
    const timeZoneOffset = new Date().getTimezoneOffset() / 60;
    const [year, month, day] = strDate.split('-').map((str: string) => Number(str));
    let hours = this.editable.item.date.getUTCHours();
    hours = hours < timeZoneOffset ? hours + 24 : hours;
    const min = this.editable.item.date.getUTCMinutes();
    const date = new Date(Date.UTC(year, month - 1, day, hours, min));
    this.editable.item.date = date;
    console.log("UserComponent -> editItemDate -> date", date);
  }

  editItemTime(strHM) {
    const timeZoneOffset = new Date().getTimezoneOffset() / 60;
    const [hours, min] = strHM.split(':').map((str: string) => Number(str));
    const year = this.editable.item.date.getFullYear();
    const month = this.editable.item.date.getMonth();
    const day = this.editable.item.date.getDate();
    const date = new Date(Date.UTC(year, month, day, hours + timeZoneOffset, min));
    this.editable.item.date = date;
    console.log("UserComponent -> editItemTime -> date", date);
  }

}
