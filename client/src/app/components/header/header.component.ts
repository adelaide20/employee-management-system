import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    let user = this.service.getUser()
    console.log(user);
    // console.log(user[0]);


  }

  logout() {
    this.service.logout();
    this.router.navigate(['login'])
  }
}
