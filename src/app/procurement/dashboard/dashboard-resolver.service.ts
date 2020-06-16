import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { SharepointService } from 'src/app/sharepoint/sharepoint.service';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<any>{
  url = '/dnp-hr/Shared Documents/CoreHRExtract.csv';
  constructor(private sharePoint: SharepointService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.sharePoint.readCSV(this.url).pipe(shareReplay());
  }
}
