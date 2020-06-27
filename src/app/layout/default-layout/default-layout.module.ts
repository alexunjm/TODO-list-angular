import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DefaultLayoutRoutingModule
  ]
})
export class DefaultLayoutModule { }
