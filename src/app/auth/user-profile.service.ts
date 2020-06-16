import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, mergeMap, tap, map, catchError } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  url = 'https://graph.microsoft.com/v1.0/me';
  
  public profile$;
  public image$;
  public initials;
  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) { 

    this.profile$ = this.http.get(this.url)
      .pipe(
        shareReplay(),
        tap(console.log));

    const imageURL = 'https://graph.microsoft.com/v1.0/me/photo/$value';
    this.image$ = this.http.get(imageURL,{responseType: 'blob'}).pipe(
      shareReplay(),  
      map(blob => {
          var urlCreator = window.URL;
          return this._sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
      }),
      catchError(error=>{
        return of('onError');
      }));
      
  }


}
