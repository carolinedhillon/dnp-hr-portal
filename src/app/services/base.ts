import { OnInit, OnDestroy } from '@angular/core';
import {SubSink} from 'subsink';
export class Base implements OnInit, OnDestroy{

    public sub  = new SubSink();
    ngOnInit(){}

    ngOnDestroy(){
        console.log(this.sub,'destroying sink ..');
        this.sub.unsubscribe();
        
    }


}