import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  signUp: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  signUpOption(user) {
    console.log("HomeComponent -> signUpOption -> user", user);
  }

  signInOption(user) {
    console.log("HomeComponent -> signInOption -> user", user);
  }

}
