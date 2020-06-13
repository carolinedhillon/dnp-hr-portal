import { Injectable, ErrorHandler } from '@angular/core';
import { EventBusService, App } from './event-bus.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  
  constructor(private eventBus: EventBusService) { }

  handleError(error) {
    this.eventBus.fire({action: App.Events.ERROR_HANDLER_EXCEPTION, payload: error});
    console.error(error);
    return throwError(error);
  }

  
}
