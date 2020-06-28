import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    {
      path: '',
      loadChildren: () =>
        import('../pages/no-auth/home/home.module').then(m => m.HomeModule)
    },
    { path: '**', redirectTo: '' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
