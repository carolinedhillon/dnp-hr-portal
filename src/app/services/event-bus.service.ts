import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService implements OnDestroy{

  private eventBus : Subject<App.Event>= new Subject();
  public eventBus$ : Observable<App.Event> = this.eventBus.asObservable();

  constructor() { }

  fire(event : App.Event){
    this.eventBus.next(event);
  }  

  ngOnDestroy(){
    this.eventBus.unsubscribe();
  }

}

export namespace App { 
  export enum Events { 
    MENU_TOGGLE, MENU_OPEN,MENU_CLOSE,
    ERROR_HANDLER_EXCEPTION
  };

  export interface Event {
    action: App.Events,
    payload?: any
  }
}
