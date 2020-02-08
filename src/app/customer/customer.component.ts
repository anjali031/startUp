import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  changepassword() {
    this.router.navigate(['/changepassword']);
  }
  Logout() {
    localStorage.removeItem('token');
    console.log('You Are Logged Out');
    this.router.navigate(['/login']);
  }
}

