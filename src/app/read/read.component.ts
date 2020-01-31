import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { JewellerInfo } from '../shared/jeweller-info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  data: any = {};
  constructor(private userService: UserService, private router: Router)  { }

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
}
