import { ComponentsModule } from './../../shared/components/components.module';
import { SharedPipesModule } from './../../shared/pipes/shared-pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MarkableItemComponent } from './components/markable-item/markable-item.component';
import { EditableItemComponent } from './components/editable-item/editable-item.component';


@NgModule({
  declarations: [UserComponent, MarkableItemComponent, EditableItemComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedPipesModule,
    ComponentsModule,
  ]
})
export class UserModule { }
