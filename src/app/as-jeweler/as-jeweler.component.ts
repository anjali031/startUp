import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import {User} from '../shared/user.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-as-jeweler',
  templateUrl: './as-jeweler.component.html',
  styleUrls: ['./as-jeweler.component.css']
})
export class AsJewelerComponent implements OnInit {
  user: User;
  userpattern = '^[a-z0-9_-]{3,15}$';
  passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}';
  emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.user = {
      email: '',
      username: '',
      password: '',
      confirm_password: '',
      IS_JEWELLER: null
    };
  }

  jeweler() {
    this.router.navigate(['/login']);
  }
  check() {
    // tslint:disable-next-line: triple-equals
    // tslint:disable-next-line: max-line-length
    if ((document.getElementById('password') as HTMLInputElement).value !== (document.getElementById('confirm_password')as HTMLInputElement).value) {
      alert ('password dont match');
    }
  }

  OnSubmit(form: NgForm) {
    this.check();
    this.userService.asJeweler(form.value)
    .subscribe((data: any) => {
      if (data.response === 201) {
        console.log(data);
        this.resetForm();
        this.router.navigate(['/login']);
        this.toastr.success('User Registration Succeeded');
      } else {
        console.log(data);
        this.toastr.error(data.error_message);
      }
    },
    err => {
      console.log(err.message);
      this.toastr.error('User Registration not  Successful');
      }
    );
  }
  Login() {
    this.router.navigate(['login']);
  }
}

// ((data: any) => {
   // localStorage.setItem('token', data.token);
  // if (data.IS_JEWELLER == true ) {
    // this.router.navigate(['/forms']);
    // } else {
   // this.router.navigate(['/customer']);
  // }

// },
 // (err: HttpErrorResponse) => {
// this.isLoginError = true;
// });
// }

// }

// (
 // res => {
   // console.log(res);
 //   this.toastr.success('User Registration Success');
    // this.router.navigate(['./login']);
 // },
 // err => {
 // console.log(err.message);
 // this.toastr.error('User Registration not  Successful');

// }
