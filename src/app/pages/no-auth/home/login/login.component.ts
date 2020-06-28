import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  @Output()
  hideLogin: EventEmitter<any> = new EventEmitter<any>();

  hideLoginClick() {
    this.hideLogin.emit('clicked!');
  }

  ngOnInit(): void {
  }
}
