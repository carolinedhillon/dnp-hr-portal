import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceChannelComponent } from './invoice-channel/invoice-channel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolverService } from './dashboard/dashboard-resolver.service';


const routes: Routes = [
  {path:'home', component: DashboardComponent, resolve:{home:DashboardResolverService}},
  {path:'invoices', component: InvoiceChannelComponent},
  {path: '', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }
