import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModule } from './error/error.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AccessDeniedModule } from './access-denied/access-denied.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorModule,
    NotFoundModule,
    AccessDeniedModule
  ]
})
export class ControlModule { }
