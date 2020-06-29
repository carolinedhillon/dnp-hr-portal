import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DashboardSupportService } from "./dashboard-support.service";
import { MatTableDataSource } from '@angular/material/table';

export interface EmployeeDetails {
  firstName: string;
  lastName: string;
  postCode: number;
  city: string;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  cols = ['name.firstName', 'name.lastName', 'address.postCode', 'address.city'];
  public employees = [];
  masterEmployees;
   dataSource;
   searchStr;

  constructor(
    private http: HttpClient,
    private service: DashboardSupportService
  ) {}

  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => {
      this.masterEmployees = this.employees = data;
      this.dataSource = this.employees;
      console.log(data);

    });

  }

  filterTable(searchStr){
    this.dataSource = this.employees.filter(obj=>{
      // let minObj = {};
      // this.cols.forEach(col => minObj[col] = obj[col]);

      let minObj = this.cols.reduce((acc,col)=>acc[col]=obj[col],{})

      let str = JSON.stringify(minObj).toLowerCase();
      return str.indexOf(searchStr.toLowerCase()) > -1;
    })
  }
  

}
