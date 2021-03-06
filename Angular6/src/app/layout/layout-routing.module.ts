import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'inventory' },
            {path: 'order',loadChildren: './order/order.module#OrderModule'},
            {path: 'inventory',loadChildren: './inventory/inventory.module#InventoryModule'} ,
            {path: 'customer',loadChildren: './customer/customer.module#CustomerModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
