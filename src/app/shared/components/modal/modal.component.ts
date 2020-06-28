import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  get title() {
    return this.data.title;
  }

}
