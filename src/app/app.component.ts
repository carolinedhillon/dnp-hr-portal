import { Component } from "@angular/core";
import { MsalService, BroadcastService } from "@azure/msal-angular";
import { Auth } from "./auth/auth-config";
import { SharepointService } from './sharepoint/sharepoint.service';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private authService: MsalService, 
    private broadcastService: BroadcastService,
    private sharePoint: SharepointService) {

      this.broadcastService.subscribe("msal:acquireTokenSuccess", payload=>this.postLogin(payload));
    }
    called = false;
    postLogin(payload){
      console.log('post login', {payload});
      if(!this.called){
      this.sharePoint.setup(environment.sharepoint.site, payload.accessToken).subscribe(obj=>{
        this.sharePoint.ping().subscribe(console.log);
      });
      
      }
      this.called = true;
    }
  

  // login() {
  //   const scopes = { extraScopesToConsent: ["user.read", "openid", "profile"] };
  //   // let sharePointSetup$ = this.sharePoint.setup(environment.sharepoint.baseSite, payload.tokens['sharepoint']);
  //   if (Auth.isIE)
  //     this.authService.loginRedirect(scopes);
  //   else
  //     this.authService.loginPopup(scopes);
  // }
}
