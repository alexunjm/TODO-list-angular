import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', loadChildren: () => import('./default-layout/default-layout.module').then(m => m.DefaultLayoutModule) },
    { path: 'home', redirectTo: '', },
    { path: '**', redirectTo: '' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
