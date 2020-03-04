import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ornamentread',
  templateUrl: './ornamentread.component.html',
  styleUrls: ['./ornamentread.component.css']
})
export class OrnamentreadComponent implements OnInit {
  data: any = {};
  constructor(private userService: UserService, private router: Router) { }

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
    this.userService.r2().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  prev(previous) {
    this.userService.r3().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }

  page4() {
    this.userService.r4().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  page5() {
    this.userService.r5().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  page6() {
    this.userService.r6().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  page7() {
    this.userService.r7().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  page8() {
    this.userService.r8().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  page9() {
    this.userService.r9().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  page10() {
    this.userService.r10().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }

  page11() {
    this.userService.r11().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }  page12() {
    this.userService.r12().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  } 
  page13() {
    this.userService.r13().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  page14() {
    this.userService.r14().subscribe(data => {
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
}
