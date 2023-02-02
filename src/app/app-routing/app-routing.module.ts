import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Listview1Component } from '../listview1/listview1.component';
import { Listview2Component } from '../listview2/listview2.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'child1', component: Listview1Component },
  { path: 'child2/:id', component: Listview2Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
export const routingcomps = [Listview1Component, Listview2Component];
