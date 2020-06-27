import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class GenericLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
