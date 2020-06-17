import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharepointService } from 'src/app/sharepoint/sharepoint.service';


@Injectable({
  providedIn: 'root'
})

export class DashboardSupportService {

  private _url: string = '/dnp-hr/Shared Documents/CoreHRExtract.csv';

  constructor (private sharepoint: SharepointService){}

    getEmployees(){
    return this.sharepoint.readCSV(this._url); 
  }

}

export interface IEmployee{
  id: number,
  name: string,
  age: number
}