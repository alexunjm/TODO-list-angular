import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EditableItem } from './../../../../shared/business';

@Component({
  selector: 'app-editable-item',
  templateUrl: './editable-item.component.html',
  styles: []
})
export class EditableItemComponent implements OnInit {

  @Output()
  handleEdit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  fireEditEvent() {
    this.handleEdit.emit();
  }

}
