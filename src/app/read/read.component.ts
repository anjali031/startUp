import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { JewellerInfo } from '../shared/jeweller-info.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  data: any = {};
  loading: any;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService)  { }

  ngOnInit() {
    this.readuser();
  }
  readuser() {
    this.loading = true;
    this.userService.readForm().subscribe(data => {
      this.loading = false;
      console.log(data);
      this.data = data;
      if (this.data.statuscode === 200) {
      } else {
        this.toastr.success('As you are our New Customer we want you to fill this form to complete your profile');
        this.router.navigate (['/radiofill']);
      }
    });
  }
// update() {
 // this.router.navigate(['/update']);
 // }
 // ornament() {
   // this.router.navigate(['/types']);
 // }
 // ornamentread() {
   // this.router.navigate(['/ornamentread']);
 // }
  changepassword() {
    this.router.navigate(['/changepassword']);
  }
  Logout() {
    localStorage.removeItem('token');
    console.log('You Are Logged Out');
    this.toastr.error('logged out');
    this.router.navigate(['/login']);
  }
}

// if (data.response == 200 ) {
  // localStorage.setItem('token' , data.data.token );
  // this.toastr.success(data.message);
 // if (data.data.IS_JEWELLER == true) {
  //  this.router.navigate(['/createview']);
  // } else {
   // this.router.navigate(['/customer']);
  // }
 // } else {
 // this.toastr.error(data.message);
// }
