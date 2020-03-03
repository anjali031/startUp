import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readspecific',
  templateUrl: './readspecific.component.html',
  styleUrls: ['./readspecific.component.css']
})
export class ReadspecificComponent implements OnInit {
  data: any = {};
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.readspecific();
  }
  readspecific() {
    this.userService.readid().subscribe((data: any ) => {
      console.log(data);
      this.data = data.data;
    });
  }
  update() {
    this.router.navigate(['./Necklaceupdate']);
  }
  delete() {
    this.userService.deletebyid().subscribe((data: any) => {
      console.log(data);
      if (data.status === 200) {
        this.toastr.success(data.response);
        localStorage.removeItem('ORNAMENT_ID');
        this.router.navigate(['/ornamentread']);

      } else {
        this.toastr.success(" Delete Operation Unsuccessful")
      }
    });
  }
 }
