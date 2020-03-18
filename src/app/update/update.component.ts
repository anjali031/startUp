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
  emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$';
  panpattern = '[0-9]{10}';
  gstpattern = '[0-9]{15}';

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

 // address() {
  // if ((document.getElementById('same')as HTMLInputElement).checked)  {
    // (document.getElementById('secondaryaddress')as HTMLInputElement).value = (document.
      //       getElementById('primaryaddress')as HTMLInputElement).value;
   // (document.getElementById('secondaryzip')as HTMLInputElement).value = (document.
     //   /     getElementById('primaryzip')as HTMLInputElement).value;
//    } else {
  //    (document.getElementById('secondaryaddress')as HTMLInputElement).value = '';
    //  (document.getElementById('secondaryzip')as HTMLInputElement).value = '';
   // }
  // (document.getElementById('secondaryaddress')as HTMLInputElement).value = (document.
    //  getElementById('primaryaddress')as HTMLInputElement).value;
//  (document.getElementById('secondaryzip')as HTMLInputElement).value = (document.
  //    getElementById('primaryzip')as HTMLInputElement).value;

  // }

  addres() {
    if ((document.getElementById('same')as HTMLInputElement).checked) {
      console.log('checked');
      (document.getElementById('owner_number')as HTMLInputElement).value = (document.
        getElementById('contact_number')as HTMLInputElement).value;
      (document.getElementById('owner_email')as HTMLInputElement).value = (document.
        getElementById('contact_mail_id')as HTMLInputElement).value;
    } else {
      console.log('uncheked');
      (document.getElementById('owner_number')as HTMLInputElement).value = '';
      (document.getElementById('owner_email')as HTMLInputElement).value = '';
    }
    console.log((document.getElementById('owner_email')as HTMLInputElement).value );
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
