import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: []
})
export class AlertComponent implements OnInit {

  hidden = true;

  past = 0;
  soon = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set dueSoon(value) {
    if (value > 0) {
      this.soon = value;
      this.show();
      setTimeout(() => {
        this.hide();
      }, 4000, this);
    }
  }

  @Input()
  set isOverdue(value) {
    if (value > 0) {
      this.past = value;
      setTimeout(() => {
        this.hide();
      }, 4000, this);
    }
  }

  show() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

}
