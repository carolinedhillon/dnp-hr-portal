import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profile;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.data.subscribe(console.log);
    this.getProfile();
  }

 

getProfile() {
  console.log('pofile');
 let  graphMeEndpoint = "https://graph.microsoft.com/v1.0/me";
  this.http.get(graphMeEndpoint).subscribe(profile => {
      this.profile = profile;
    });
}

}
