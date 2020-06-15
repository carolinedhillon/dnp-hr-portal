import { Component, OnInit, NgZone, Renderer, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router';
import { Base } from '../services/base';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent extends Base implements OnInit {
  loading = true;
  @ViewChild('spinnerElement',{static: true}) spinnerElement: ElementRef;
  constructor(private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer) { 
      super();
      this.sub = new SubSink();
      this.sub.sink = this.router.events.subscribe(this.manageRoutes.bind(this));
    }

  ngOnInit() {
    
  }

  manageRoutes(event: RouterEvent){
    console.log({event});
    if(event instanceof NavigationStart)
      this.ngZone.runOutsideAngular(() => this.renderer.setElementStyle( this.spinnerElement.nativeElement,'opacity','1'))

    if(event instanceof NavigationEnd) 
      this.ngZone.runOutsideAngular(() => this.renderer.setElementStyle( this.spinnerElement.nativeElement,'opacity','0'))

  }

}
