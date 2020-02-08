import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  OnSubmit(username, password) {
    this.userService.loginUser(username, password).subscribe((data: any) => {
     // localStorage.setItem('token', data.data.token);
      console.log(data);
      if (data.response == 200 ) {
        localStorage.setItem('token' , data.data.token );
        this.toastr.success(data.message);
        if (data.data.IS_JEWELLER == true) {
          this.router.navigate(['/read']);
        } else {
          this.router.navigate(['/customer']);
        }
      } else {
        this.toastr.error(data.message);
      }

   },
   (err: HttpErrorResponse) => {
     this.isLoginError = true;
   });
 }

}


