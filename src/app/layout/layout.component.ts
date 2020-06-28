import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="container mx-auto">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
