import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShellComponent } from "./shell/shell.component";
import { MaterialModule } from "./material/material.module";
import { ToolbarComponent } from "./shell/toolbar/toolbar.component";
import { SideNavbarComponent } from "./shell/side-navbar/side-navbar.component";
import { PageNotFoundComponent } from "./shell/page-not-found/page-not-found.component";
import { GlobalErrorHandlerService } from "./services/global-error-handler.service";
import { MsalModule, MsalInterceptor } from "@azure/msal-angular";
import { Auth } from "./auth/auth-config";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CallbackComponent } from './auth/callback/callback.component';
import { AvatarPipe } from './pipes/avatar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    ToolbarComponent,
    SideNavbarComponent,
    PageNotFoundComponent,
    CallbackComponent,
    AvatarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MsalModule.forRoot(Auth.config, Auth.options),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
