import { NmbToArr } from './../../shared/pipes/format/format';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user.component.html',
  styles: [],
  providers: [NmbToArr]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
