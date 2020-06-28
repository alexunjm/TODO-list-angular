import { ToDoListMockService } from './../../shared/services';
import { NmbToArr } from './../../shared/pipes/format/format';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/business';

@Component({
  templateUrl: './user.component.html',
  styles: [],
  providers: [NmbToArr]
})
export class UserComponent implements OnInit {

  toDoList: Array<Item>;
  constructor(toDoListService: ToDoListMockService) {
    toDoListService.getAll().then(list => this.toDoList = list);
  }

  ngOnInit(): void {
  }

}
