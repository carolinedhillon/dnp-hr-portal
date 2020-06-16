import { Component, OnInit, OnDestroy } from "@angular/core";
import { MsalService, BroadcastService } from "@azure/msal-angular";
import { Auth } from "./auth/auth-config";
import { SharepointService } from './sharepoint/sharepoint.service';
import { environment } from 'src/environments/environment';
import { take, filter, tap, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Base } from './services/base';
import { SubSink } from 'subsink';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent extends Base implements OnInit, OnDestroy{
  

  constructor(private authService: MsalService, 
    private broadcastService: BroadcastService,
    private sharePoint: SharepointService) {
      super();
      this.sub = new SubSink();
      this.sub.sink = this.broadcastService.getMSALItem()
      .pipe(
        filter(obj=>obj.type === "msal:acquireTokenSuccess"),
        take(1),
        mergeMap(this.postLogin.bind(this))
      ).subscribe(obj=>{
        this.sub.sink = this.sharePoint.ping().subscribe(console.log);
      });
    }

    ngOnInit(){}

    ngOnDestroy(){}

    postLogin(payload){
      console.log({payload});
     return from(this.authService.acquireTokenSilent({scopes:[`${environment.sharepoint.site}/AllSites.FullControl`]}))
      .pipe(tap(token=>this.sharePoint.setup(environment.sharepoint.site, token.accessToken)));
    }
  

}
