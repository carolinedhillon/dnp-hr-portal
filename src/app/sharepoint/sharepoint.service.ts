import { Injectable } from '@angular/core';
import { BearerTokenFetchClient} from "@pnp/common";
import { sp,} from "@pnp/sp";
import { of, from, Observable, throwError } from 'rxjs';
import { mergeMap, map, concatMap, tap, last, shareReplay } from 'rxjs/operators';
import { MsalService } from '@azure/msal-angular';
import { environment } from 'src/environments/environment';
import { HelperService} from 'dnp-helper'
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import "@pnp/sp/files";


@Injectable({
  providedIn: 'root'
})
export class SharepointService {
  token;
  constructor(private authService: MsalService, private help: HelperService) {
    
   }


  setup(url: string, token: string) {
        sp.setup({
          sp: {
            baseUrl: environment.sharepoint.site,
            headers: {
              "Accept": "application/json;odata=verbose",
              "Authorization": `Bearer ${token}`
            }
          }
        });
  }

  public ping(){
    return from(sp.web.currentUser.get());
    // return from(sp.web.select('Title').get());
  }

	readCSV(url: string, offset=0) {
		return from(sp.web
		.getFileByServerRelativeUrl(url)
		.getText())
		.pipe(map(rows=>this.help.parseCSV(rows), offset));
  }

  readXLSX(){}
}


