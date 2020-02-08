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
  passwordPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
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


  OnSubmit(form: NgForm) {
    this.userService.asJeweler(form.value)
    .subscribe((data: any) => {
      if (data.response === 201) {
        console.log(data);
        this.resetForm();
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
