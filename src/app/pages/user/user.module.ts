import { ComponentsModule } from './../../shared/components/components.module';
import { SharedPipesModule } from './../../shared/pipes/shared-pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedPipesModule,
    ComponentsModule,
  ]
})
export class UserModule { }
