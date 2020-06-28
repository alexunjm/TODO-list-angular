import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Input()
  data: {title: string} = {title: null};

  constructor() { }

  ngOnInit(): void {
  }

  get title() {
    return this.data.title;
  }

}
