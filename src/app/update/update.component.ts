import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import {JewellerInfo} from '../shared/jeweller-info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  jeweller: JewellerInfo;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private userService: UserService , private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.jeweller = {
      NAME_OF_FIRM: '',
      ADDRESS_OF_FIRM: '',
      CITY: '',
      STATE: '',
      CONTACT_NAME: '',
      CONTACT_NUMBER: '',
      CONTACT_MAIL_ID: '',
      GST_NUMBER: '',
      PAN_NUMBER: '',
      OWNER_NAME: '',
      OWNER_NUMBER: '',
      OWNER_EMAIL: ''
    };
  }


  OnSubmit(form: NgForm) {
    this.userService.update(form.value)
    .subscribe(
      res => {
       // console.log(res);
        this.router.navigate(['./read']);
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
