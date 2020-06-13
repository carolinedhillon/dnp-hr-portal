import { Component } from "@angular/core";
import { MsalService } from "@azure/msal-angular";
import { Auth } from "./auth/auth-config";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private authService: MsalService) {}

  login() {
    if (Auth.isIE)
      this.authService.loginRedirect({
        extraScopesToConsent: ["user.read", "openid", "profile"],
      });
    else
      this.authService.loginPopup({
        extraScopesToConsent: ["user.read", "openid", "profile"],
      });
  }
}
