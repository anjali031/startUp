import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ornamentread',
  templateUrl: './ornamentread.component.html',
  styleUrls: ['./ornamentread.component.css']
})
export class OrnamentreadComponent implements OnInit {
  data: any = {};
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.page1();
  }
  page1() {
    this.userService.readorn().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  next(next) {
    this.userService.next = next;
    this.userService.r2().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  prev(previous) {
    this.userService.prev = previous;
    this.userService.r3().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }

  read(ORNAMENT_ID) {
    localStorage.setItem('ORNAMENT_ID' , ORNAMENT_ID );
    this.router.navigate(['./readSpecific']);
    // this.userService.readid().subscribe((data: any) => {
     // console.log(data);
    // });
  }
  changepassword() {
    this.router.navigate(['/changepassword']);
  }
  Logout() {
    localStorage.removeItem('token');
    console.log('You Are Logged Out');
    this.toastr.error('logged out');
    this.router.navigate(['/login']);
  }
  Createornaments() {
    this.router.navigate(['/types']);
  }
}
