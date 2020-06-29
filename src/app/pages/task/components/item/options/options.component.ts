import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styles: []
})
export class OptionsComponent implements OnInit {

  @Input()
  hidden = true;

  @Output()
  handleEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  handleDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  optionEdit() {
    this.handleEdit.emit();
  }

  optionDelete() {
    this.handleDelete.emit();
  }

}
