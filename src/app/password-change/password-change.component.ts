import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Password } from '../shared/password.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  password: Password;
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.password = {
      old_password: '',
      new_password: '',
      confirm_new_password: ''
    };
  }
  OnSubmit(form: NgForm) {
    this.userService.changePassword(form.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/forms']);
        },
        err => {
          console.log(err.message);
        }
      );
    }

    Logout() {
      localStorage.removeItem('token');
      console.log('You Are Logged Out');
      this.toastr.error('logged out');
      this.router.navigate(['/login']);
    }
  }
