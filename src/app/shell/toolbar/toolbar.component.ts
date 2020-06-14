import { Component, OnInit } from '@angular/core';
import { EventBusService, App } from 'src/app/services/event-bus.service';
import { filter, map, tap } from 'rxjs/operators';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserProfileService } from 'src/app/auth/user-profile.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  errors: App.Event[] = []; 
  profile$;
  image$;

  constructor(private eventBus: EventBusService, 
    private authService: MsalService,
    private http: HttpClient,
    private userProfile: UserProfileService,
    private router: Router) { }

  ngOnInit() {
    this.profile$ = this.userProfile.profile$;
    this.image$ = this.userProfile.image$;

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
