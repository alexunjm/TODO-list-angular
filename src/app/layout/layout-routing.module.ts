import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', loadChildren: () => import('../pages/no-auth/generic-layout.module').then(m => m.GenericLayoutModule) },
    { path: '**', redirectTo: '' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
