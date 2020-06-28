import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor() { }

  @Output()
  hideSignUp: EventEmitter<any> = new EventEmitter<any>();

  hideSignUpClick() {
    this.hideSignUp.emit('clicked!');
  }

  ngOnInit(): void {
  }

}
