import { Component, OnInit } from '@angular/core';

import { NmbToArr } from '../../shared/pipes/format/format';
import { Item } from '../../shared/business';
import { DateHelperService, ToDoListService, ToDoListMockService } from '../../shared/services';

@Component({
  templateUrl: './todo-list.component.html',
  styles: [],
  providers: [NmbToArr]
})
export class ToDoListComponent implements OnInit {

  toDoList: Array<Item>;

  editable: {title: string, index: number, item: any};
  saving = false;

  counter = {isOverdue: 0, dueSoon: 0};

  // constructor(private toDoListService: ToDoListMockService, private dateHelper: DateHelperService) {
  constructor(private toDoListService: ToDoListService, private dateHelper: DateHelperService) {
  }

  ngOnInit(): void {
    this.toDoListService.getAll().then(list => {
      // this.counter = {isOverdue: 0, dueSoon: 0};
      this.toDoList = list;
      this.toDoList.forEach(item => {
        if (item.isDueSoon()) {
          this.counter.dueSoon++;
        } else if (item.isOverdue()) {
          this.counter.isOverdue++;
        }
      });
      console.log("ToDoListComponent -> ngOnInit -> this.counter", this.counter)
    });
    this.hideModal();
  }

  hideModal() {
    this.editable = {title: null, index: -1, item: null};
  }

  handleCreate() {
    this.editable = {title: 'Crear tarea', index: -1, item: this.toDoListService.createEmptyToDo().cloneToJson()};
    console.log({item: this.editable.item});
  }

  handleEdit(index: number) {
    const item = this.toDoList[index].cloneToJson(true);
    // console.log({item});
    this.editable = {title: 'Editar tarea', index, item};
  }

  handleDelete(index: number) {
    // console.log("ToDoListComponent -> handleDelete -> index", index);
    return this.toDoListService.deleteToDoById(
      this.toDoList[index].getId(),
      this.toDoList
    );
  }

  editItemDate(strDate: string) {
    this.editable.item.date = this.dateHelper.dateFromString(strDate, this.editable.item.date);
    // console.log('ToDoListComponent -> editItemDate -> date', {date: this.editable.item.date});
  }

  editItemTime(strHM) {
    this.editable.item.date = this.dateHelper.dateFromTimeString(strHM, this.editable.item.date);
    // console.log('ToDoListComponent -> editItemTime -> date', {date: this.editable.item.date});
  }

  saveItem(index, item) {
    this.save({index, item});
  }

  handleSaveItem() {
    try {
      this.saving = true;
      this.save(this.editable).then(() => {
        this.hideModal();
        this.saving = false;
      }).catch((error) => {
        console.error('ToDoListComponent -> handleSaveItem -> Promise catch:error', {error});
        this.saving = false;
      });
    } catch (error) {
      console.error('ToDoListComponent -> handleSaveItem -> catch:error', {error});
      this.saving = false;
    }
  }

  save(editable): Promise<any> {
    try {
      if (editable.index < 0) {
        return this.toDoListService.createToDo(
          editable.item,
          this.toDoList
        );
      }
      return this.toDoListService.updateToDo(
        {...editable.item, _id: this.toDoList[editable.index].getId()},
        this.toDoList
      );
    } catch (error) {
      console.error('ToDoListComponent -> saveItem -> error', {error});
      return Promise.reject(error);
    }
  }

}
