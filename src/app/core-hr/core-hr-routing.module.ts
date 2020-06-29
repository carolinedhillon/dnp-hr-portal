import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ObservableSampleComponent } from './observable-sample/observable-sample.component';


const routes: Routes = [
  {path:'home', component: DashboardComponent},
  {path:'employees', component: ObservableSampleComponent},
  // {path:'invoices', component: InvoiceChannelComponent},
  {path: '', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreHRRoutingModule { }
