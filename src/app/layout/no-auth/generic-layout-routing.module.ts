import { GenericLayoutComponent } from './generic-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: GenericLayoutComponent, children: [
    { path: '', loadChildren: () => import('../../pages/no-auth/home/home.module').then(m => m.HomeModule) },
    { path: 'home', redirectTo: '', },
    { path: '**', redirectTo: '' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericLayoutRoutingModule { }
