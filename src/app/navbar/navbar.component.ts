import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
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
