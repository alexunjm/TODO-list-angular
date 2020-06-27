import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DefaultLayoutModule } from './default-layout/default-layout.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DefaultLayoutModule
  ]
})
export class LayoutModule { }
