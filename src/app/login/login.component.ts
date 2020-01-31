import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(username, password) {
    this.userService.loginUser(username, password).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      if (data.IS_JEWELLER == true ) {
        this.router.navigate(['/createview']);
      } else {
        this.router.navigate(['/customer']);
      }

   },
   (err: HttpErrorResponse) => {
     this.isLoginError = true;
   });
 }

}

