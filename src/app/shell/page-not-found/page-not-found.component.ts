import { Component, OnInit } from '@angular/core';
import { EventBusService, App } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.fire({action: App.Events.MENU_CLOSE})
  }
}
