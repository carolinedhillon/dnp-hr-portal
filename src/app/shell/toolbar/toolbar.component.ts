import { Component, OnInit } from '@angular/core';
import { EventBusService, App } from 'src/app/services/event-bus.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  errors: App.Event[] = []; 

  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.eventBus$.pipe(
      filter(event=>event.action === App.Events.ERROR_HANDLER_EXCEPTION)
    ).subscribe(event=>this.errors.push(event));
  }

  toggleMenu(){
    this.eventBus.fire({action: App.Events.MENU_TOGGLE});
  }
}
