import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-ornamentread',
  templateUrl: './ornamentread.component.html',
  styleUrls: ['./ornamentread.component.css']
})
export class OrnamentreadComponent implements OnInit {
  data: any = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  page1() {
    this.userService.readorn().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  page2() {
    this.userService.r2().subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  page3() {
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
}
