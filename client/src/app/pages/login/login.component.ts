import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authserv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      alert("all fields required")
    }
    else {
      // user object
      let user = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };


      this.authserv.login(user).subscribe((data: any) => {

        sessionStorage.setItem("User", JSON.stringify(data));

        alert("login successful")

        this.router.navigate(['list'])

      })


    }
  }

}
