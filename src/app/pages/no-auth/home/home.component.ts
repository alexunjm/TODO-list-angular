import { AuthService } from './../../../shared/services/api/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  signUp: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUpOption(user) {
    this.authService.singUp(user).then(response => {
      console.log("HomeComponent -> signUpOption -> user", {user, response});
    }).catch(console.error);
  }

  signInOption(user) {
    this.authService.singIn(user).then(response => {
      console.log("HomeComponent -> signInOption -> user", {user, response});
    }).catch(console.error);
  }

}
