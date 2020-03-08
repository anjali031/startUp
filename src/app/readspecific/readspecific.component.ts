import { Component, OnInit} from '@angular/core';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-readspecific',
  templateUrl: './readspecific.component.html',
  styleUrls: ['./readspecific.component.css']
})
export class ReadspecificComponent implements OnInit  {
  data: any = {};

  // tslint:disable-next-line: max-line-length

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
  update(ORNAMENT_TYPE, ORNAMENT_MATERIAL) {
    localStorage.setItem('ORNAMENT_TYPE' , ORNAMENT_TYPE );
    localStorage.setItem('ORNAMENT_MATERIAL' , ORNAMENT_MATERIAL );
    if (ORNAMENT_TYPE === 1) {
      this.router.navigate(['./Ringupdate']);
    }
    if ( ORNAMENT_TYPE === 2 ) {
      this.router.navigate(['./Earupdate']);
    }
    if ( ORNAMENT_TYPE === 13 ) {
      this.router.navigate(['./Cufflinkupdate']);
    }
    if ( ORNAMENT_TYPE === 6 ) {
      this.router.navigate(['./Chainupdate']);
    }
    if ( ORNAMENT_TYPE === 7 ) {
      this.router.navigate(['./Chainpendatupdate']);
    }
    if ( ORNAMENT_TYPE === 4 ) {
      this.router.navigate(['./Braceletupdate']);
    }
    if ( ORNAMENT_TYPE === 5 ) {
      this.router.navigate(['./Banglesupdate']);
    }
    if ( ORNAMENT_TYPE === 9 ) {
      this.router.navigate(['./Mangalsutraupdate']);
    }
    if ( ORNAMENT_TYPE === 8 ) {
      this.router.navigate(['./Necklaceupdate']);
    }
    if ( ORNAMENT_TYPE === 3 ) {
      this.router.navigate(['./Nosepinupdate']);
    }
    if ( ORNAMENT_TYPE === 12 ) {
      this.router.navigate(['./Pendantearring']);
    }
    if ( ORNAMENT_TYPE === 11 ) {
      this.router.navigate(['./Pendantupdate']);
    }
    if ( ORNAMENT_TYPE === 10 ) {
      this.router.navigate(['./Setsupdate']);
    }
  }
  delete() {
    this.userService.deletebyid().subscribe((data: any) => {
      console.log(data);
      if (data.status === 200) {
        this.toastr.success(data.response);
        localStorage.removeItem('ORNAMENT_ID');
        this.router.navigate(['/ornamentread']);

      } else {
        this.toastr.error(' Delete Operation Unsuccessful')
      }
    });
  }


 }
