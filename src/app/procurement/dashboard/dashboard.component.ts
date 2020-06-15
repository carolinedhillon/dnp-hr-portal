import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Base } from 'src/app/services/base';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends Base implements OnInit {
  data;
  constructor(private route: ActivatedRoute, private http: HttpClient) { super(); }

  ngOnInit() {
    this.sub = new SubSink();
    this.sub.sink = this.route.data.subscribe(data=>{
      this.data = data;
      console.log('data :: ', this.data);
    });
    // this.getProfile();
  }

  sharePointPing(){
    console.log('sharepoint ping..')
  }

 



}
