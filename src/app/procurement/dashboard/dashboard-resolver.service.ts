import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<any>{

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return of(['result from resolver']);
  }
}
