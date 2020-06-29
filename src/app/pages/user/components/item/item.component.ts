import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from './../../../../shared/business';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  @Output()
  handleEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  handleDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  optionEdit() {
    this.handleEdit.emit(this.item);
  }

  optionDelete() {
    this.handleDelete.emit(this.item);
  }

}
