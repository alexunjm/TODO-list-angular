import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './../../shared/components/components.module';
import { ItemComponent } from './components/item/item.component';
import { EditableItemComponent } from './components/editable-item/editable-item.component';
import { MarkableItemComponent } from './components/markable-item/markable-item.component';
import { SharedPipesModule } from './../../shared/pipes/shared-pipes.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { OptionsComponent } from './components/item/options/options.component';


@NgModule({
  declarations: [UserComponent, MarkableItemComponent, EditableItemComponent, ItemComponent, OptionsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedPipesModule,
    FormsModule,
    ComponentsModule,
  ]
})
export class UserModule { }
