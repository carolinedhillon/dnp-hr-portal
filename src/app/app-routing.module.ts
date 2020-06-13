import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShellComponent } from "./shell/shell.component";
import { PageNotFoundComponent } from './shell/page-not-found/page-not-found.component';
import { CallbackComponent } from './auth/callback/callback.component';

const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "procurement",
        loadChildren: () =>
          import("./procurement/procurement.module").then(
            m => m.ProcurementModule
          )}
    ]
  },
  {
    path: "public",
    loadChildren: () =>
      import("./public/public.module").then(m => m.PublicModule)
  },
  {path:'auth/callback', component: CallbackComponent},
  {path: 'page-not-found',  component: PageNotFoundComponent },
  { path: '**',  redirectTo: '/page-not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
