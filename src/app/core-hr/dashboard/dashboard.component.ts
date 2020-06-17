import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DashboardSupportService } from "./dashboard-support.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public employees = [];

  constructor(
    private http: HttpClient,
    private service: DashboardSupportService
  ) {}

  ngOnInit(): void {
    this.service.getEmployees().subscribe(data => {
      this.employees = data;
      console.log(data);
    });
  }
}
