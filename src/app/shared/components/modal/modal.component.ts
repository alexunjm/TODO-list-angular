import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { EditableItem } from './../../business';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Input()
  hidden: boolean = true;

  @Input()
  data: {title: string};

  @Output()
  handleCloseEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  get title() {
    return this.data.title;
  }

  fireClose() {
    this.handleCloseEvent.emit({fromCloseButton: true});
  }

}
