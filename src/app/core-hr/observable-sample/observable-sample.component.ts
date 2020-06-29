import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Subscription, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-sample',
  templateUrl: './observable-sample.component.html',
  styleUrls: ['./observable-sample.component.scss']
})
export class ObservableSampleComponent implements OnInit {

  subject = new BehaviorSubject(-1);
  observable1$:Observable<any>;

  observable = this.subject.asObservable();
  values = [1,2,3,4,5];
  index = -1;
  observable2Value;
  observable2Subscription:Subscription;

  constructor() { }

  ngOnInit(): void {
  }


  fireNext(){
    this.index = this.index + 1;
    this.subject.next(this.values[this.index]);
    // this.index = this.index + 1;
  };

  fireSubscribe(){
    this.observable1$ = this.observable;
  };

  fireDoSubscribe(){
    this.observable2Subscription = 
    this.observable.pipe(
      tap(obj => console.log(obj)),
      map(obj => "caroline"+obj)

    )
    .subscribe(value => this.observable2Value = value);
  };

  fireUnsubscribe(){
    this.observable1$ = undefined;
  }

  fireDoUnsubscribe(){
    this.observable2Subscription.unsubscribe();
  };

}
