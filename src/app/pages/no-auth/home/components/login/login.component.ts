import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  valid: {name: boolean, email: boolean, pass: boolean, all: boolean} = {name: true, email: true, pass: true, all: true};
  user: {name?: string, email?: string, pass?: string} = {name: '', email: '', pass: ''};

  constructor() {
  }

  @Output()
  hideLogin: EventEmitter<any> = new EventEmitter<any>();

  hideLoginClick() {
    this.hideLogin.emit('clicked!');
  }

  ngOnInit(): void {
  }

  signIn() {
    this.valid.all = true;
    // tslint:disable-next-line: max-line-length
    const validEmailRegex = RegExp(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i)
    if (!validEmailRegex.test(this.user.email)) {
      this.valid.email = false;
      this.valid.all = false;
    }
    if (!(this.user.pass && this.user.pass.length > 0)) {
      this.valid.pass = false;
      this.valid.all = false;
    }

    if (this.valid.all) {
      console.log('puede iniciar');
    } else {
      console.log('------NO puede iniciar');
    }
  }
}
