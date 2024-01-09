import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers/customers.component';
import { CustomerDetailsComponent } from './customers/details/customer-details/customer-details.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  {path: 'details/:customerId', component: CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
