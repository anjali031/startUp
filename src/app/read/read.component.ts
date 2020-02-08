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
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService)  { }

  ngOnInit() {
    this.readuser();
  }
  readuser() {
    this.userService.readForm().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  update() {
    this.router.navigate(['/update']);
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
}
