import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-readspecific',
  templateUrl: './readspecific.component.html',
  styleUrls: ['./readspecific.component.css']
})
export class ReadspecificComponent implements OnInit {
  data: any = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.readspecific();
  }
  readspecific() {
    this.userService.readid().subscribe((data: any ) => {
      console.log(data);
      this.data = data.data;
    });
  }

 }
