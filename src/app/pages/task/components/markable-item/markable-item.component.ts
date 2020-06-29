import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MarkableItem } from './../../../../shared/business';

@Component({
  selector: 'app-markable-item',
  templateUrl: './markable-item.component.html',
  styles: []
})
export class MarkableItemComponent implements OnInit {

  @Input()
  item: MarkableItem;

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(event) {
    this.item.setCompleted(event.target.checked);
  }

}
