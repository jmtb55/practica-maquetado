import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: 'orders', loadChildren: './features/orders/orders.module#OrdersModule' },
  { path: 'ordenes', loadChildren: './features/orders/orders.module#OrdersModule' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
