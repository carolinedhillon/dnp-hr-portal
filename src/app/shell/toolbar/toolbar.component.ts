import { Component, OnInit } from '@angular/core';
import { EventBusService, App } from 'src/app/services/event-bus.service';
import { filter, map } from 'rxjs/operators';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  errors: App.Event[] = []; 
  profile$;

  constructor(private eventBus: EventBusService, 
    private authService: MsalService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.profile$ = this.http.get("https://graph.microsoft.com/v1.0/me")
      .pipe(
        map(obj=>{return obj['displayName']; }),
      );

    this.eventBus.eventBus$.pipe(
      filter(event=>event.action === App.Events.ERROR_HANDLER_EXCEPTION)
    ).subscribe(event=>this.errors.push(event));
  }

  toggleMenu(){
    this.eventBus.fire({action: App.Events.MENU_TOGGLE});
  }

  logout(){
    this.authService.logout();
    // this.router.navigate(['/public/index']);
  }
   
}
