import { GenericLayoutComponent } from './generic-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericLayoutRoutingModule } from './generic-layout-routing.module';


@NgModule({
  declarations: [GenericLayoutComponent],
  imports: [
    CommonModule,
    GenericLayoutRoutingModule
  ]
})
export class GenericLayoutModule { }
