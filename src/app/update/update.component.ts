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
  data: any = {};
  jeweller: JewellerInfo;
  emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
  panpattern = '[0-9]{10}';
  gstpattern = '[0-9]{15}';

  constructor(private userService: UserService , private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.readuser();
  }
  readuser() {
    this.userService.readForm().subscribe(data => {
      console.log(data);
      this.data = data;
      this.print();

    });
  }
  print() {
    this.jeweller.NAME_OF_FIRM = this.data.data.NAME_OF_FIRM;
    this.jeweller.ADDRESS_OF_FIRM = this.data.data.ADDRESS_OF_FIRM;
    this.jeweller.CITY = this.data.data.CITY;
    this.jeweller.STATE = this.data.data.STATE;
    this.jeweller.CONTACT_NAME = this.data.data.CONTACT_NAME;
    this.jeweller.CONTACT_NUMBER = this.data.data.CONTACT_NUMBER;
    this.jeweller.CONTACT_MAIL_ID = this.data.data.CONTACT_MAIL_ID;
    this.jeweller.GST_NUMBER = this.data.data.GST_NUMBER;
    this.jeweller.PAN_NUMBER = this.data.data.PAN_NUMBER;
    this.jeweller.OWNER_NAME = this.data.data.OWNER_NAME;
    this.jeweller.OWNER_NUMBER = this.data.data.OWNER_NUMBER;
    this.jeweller.OWNER_EMAIL = this.data.data.OWNER_EMAIL;
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



  addres() {
    if ((document.getElementById('same')as HTMLInputElement).checked) {
      console.log('checked');
      this.jeweller.OWNER_NUMBER = (document.
        getElementById('contact_number')as HTMLInputElement).value;
      this.jeweller.OWNER_EMAIL = (document.getElementById('contact_mail_id')as HTMLInputElement).value;
    } else {
      console.log('uncheked');
      this.jeweller.OWNER_NUMBER  = '';
      this.jeweller.OWNER_EMAIL = '';
    }
    }

  call() {
    const inputValue = (document.getElementById('contact_mail_id') as HTMLInputElement).value;
    console.log(inputValue);
  }

  OnSubmit(form: NgForm) {
    this.userService.update(form.value)
    .subscribe((data: any) => {
        console.log(data);
        if (data.status === 201) {
          this.router.navigate(['./read']);
        } else {
          alert ('Try filling the form carefully with correct info');
        }
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
