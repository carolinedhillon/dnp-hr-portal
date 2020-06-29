import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { EventBusService, App } from 'src/app/services/event-bus.service';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter} from 'rxjs/operators'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit, OnDestroy {
  @ViewChild('drawer',{static:true}) drawer : MatDrawer;
  navItems: Nav.Item[] = [
    {text:'Home', icon:'home', route:'core-hr/home'},
    {text:'Employees', icon:'person', route:'/core-hr/employees'},
    {text:'Teams', icon:'people_alt', route:'/payment-orders'},
    {text:'Payroll', icon:'monetization_on', route:'/invoice-channel'},
    {text:'Diversity', icon:'public', route:'/suppliers'},
    {text:'...', icon:'tune', route:'/recs'}
  ];

  subs:Subscription[] = []; 
  constructor(private eventBusService: EventBusService,
    private router: Router) { }

  ngOnInit() {
    
    this.subs.push(this.eventBusService.eventBus$.subscribe(this.manageEvents.bind(this)));
    this.subs.push(this.router.events
      .pipe(filter(route=> route instanceof NavigationEnd))
      .subscribe(this.detectMenu.bind(this)));

    // by the time the first load happens navigation has already ended
    this.detectMenu({url:this.router.url});
  }

  ngOnDestroy(){
    this.subs.forEach(sub=>sub.unsubscribe());
  }

  detectMenu({url}){
    this.navItems.forEach(item=>{
      item.active = (<string>url).startsWith(item.route);
    });
  }

  manageEvents(event: App.Event){
    switch(event.action){
      case App.Events.MENU_TOGGLE: this.drawer.toggle(); break;
      case App.Events.MENU_CLOSE: this.drawer.close(); break;
      case App.Events.MENU_OPEN: this.drawer.open(); break;
    }
  }

}

export namespace Nav {
  export interface Item {text:string, icon:string, route:string, active?: boolean}
}
