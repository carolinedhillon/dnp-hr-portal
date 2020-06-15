import { Injectable } from '@angular/core';
import { BearerTokenFetchClient} from "@pnp/common";
import { sp,} from "@pnp/sp";
import { of, from, Observable, throwError } from 'rxjs';
import { mergeMap, map, concatMap, tap, last } from 'rxjs/operators';
import "@pnp/sp/webs";
import { MsalService } from '@azure/msal-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {
  token;
  constructor(private authService: MsalService) {
    
   }


  setup(url: string, token: string) {
    return from(this.authService.acquireTokenSilent({scopes:['https://dnpassociates.sharepoint.com/AllSites.FullControl']}))
      .pipe(tap(token=>{
        console.log('setup token ', {token});
        sp.setup({
          sp: {
            baseUrl: environment.sharepoint.site,
            headers: {
              "Accept": "application/json;odata=verbose",
              "Authorization": `Bearer ${token.accessToken}`
            },
            // fetchClientFactory: () => new BearerTokenFetchClient(token)
            // fetchClientFactory: ()=> new MsalTokenFetchClient()
          }
        });
      }));

  }

  public ping(){
    return from(sp.web.select('Title').get());
  }
}


