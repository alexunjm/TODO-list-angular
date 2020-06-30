import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../shared/components/components.module';
import { ItemComponent } from './components/item/item.component';
import { EditableItemComponent } from './components/editable-item/editable-item.component';
import { MarkableItemComponent } from './components/markable-item/markable-item.component';
import { SharedPipesModule } from '../../shared/pipes/shared-pipes.module';
import { TaskRoutingModule } from './task-routing.module';
import { ToDoListComponent } from './todo-list.component';
import { OptionsComponent } from './components/item/options/options.component';


@NgModule({
  declarations: [ToDoListComponent, MarkableItemComponent, EditableItemComponent, ItemComponent, OptionsComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedPipesModule,
    FormsModule,
    ComponentsModule,
  ]
})
export class TaskModule { }
