import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';

import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './../../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      { path: 'list', component: OrdersListComponent },
      { path: 'listar', component: OrdersListComponent },
    ],
  },
];

@NgModule({
  declarations: [OrdersComponent, OrdersListComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],
})
export class OrdersModule { }
