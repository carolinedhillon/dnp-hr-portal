import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Auth } from 'src/app/auth/auth-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private authService: MsalService, private router: Router) {}

  ngOnInit(){}

  login() {
    if (Auth.isIE)
      this.authService.loginRedirect({
        extraScopesToConsent: ["user.read", "openid", "profile"],
      });
    else
      this.authService.loginPopup({
        extraScopesToConsent: ["user.read", "openid", "profile"],
      }).then(obj=>this.router.navigate(['/procurement']));
  }
}
