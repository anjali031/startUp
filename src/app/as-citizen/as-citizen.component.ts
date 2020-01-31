import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-as-citizen',
  templateUrl: './as-citizen.component.html',
  styleUrls: ['./as-citizen.component.css']
})
export class AsCitizenComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private userService: UserService) { }

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
    this.userService.asCitizen(form.value)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
