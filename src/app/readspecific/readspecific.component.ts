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
    if (ORNAMENT_TYPE === 'Ring') {
      localStorage.setItem('ORNAMENT_TYPE' , '1' );
    }
    if ( ORNAMENT_TYPE === 'Ear Ring' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '2' );
    }
    if ( ORNAMENT_TYPE === 'Cuff Link' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '13' );
    }
    if ( ORNAMENT_TYPE === 'Chain' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '6' );
    }
    if ( ORNAMENT_TYPE === 'Chain with Pendant' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '7' );
    }
    if ( ORNAMENT_TYPE === 'Bracelet' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '4' );
    }
    if ( ORNAMENT_TYPE === 'Bangles' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '5' );
    }
    if ( ORNAMENT_TYPE === 'Mangalsutra' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '9' );
    }
    if ( ORNAMENT_TYPE === 'Necklace' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '8' );
    }
    if ( ORNAMENT_TYPE === 'Nosepin' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '3' );
    }
    if ( ORNAMENT_TYPE === 'Pendant with Earring' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '12' );
    }
    if ( ORNAMENT_TYPE === 'Pendant' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '11' );
    }
    if ( ORNAMENT_TYPE === 'Sets' ) {
      localStorage.setItem('ORNAMENT_TYPE' , '10' );
    }
    if (ORNAMENT_MATERIAL === 'Diamond Studded') {
      localStorage.setItem('ORNAMENT_MATERIAL' , '1' );
    }
    if ( ORNAMENT_MATERIAL === 'Gemstone Studded' ) {
      localStorage.setItem('ORNAMENT_MATERIAL' , '2' );
    }
    if ( ORNAMENT_MATERIAL === 'Diamond with Gemstone' ) {
      localStorage.setItem('ORNAMENT_MATERIAL' , '3' );
    }
    if ( ORNAMENT_MATERIAL === 'Simple Plain' ) {
      localStorage.setItem('ORNAMENT_MATERIAL' , '4' );
    }
    if ( ORNAMENT_MATERIAL === 'Casting Plain' ) {
      localStorage.setItem('ORNAMENT_MATERIAL' , '5' );
    }
    if (ORNAMENT_TYPE === 'Ring') {
      this.router.navigate(['./Ringupdate']);
    }
    if ( ORNAMENT_TYPE === 'Ear Ring' ) {
      this.router.navigate(['./Earupdate']);
    }
    if ( ORNAMENT_TYPE === 'Cuff Link' ) {
      this.router.navigate(['./Cufflinkupdate']);
    }
    if ( ORNAMENT_TYPE === 'Chain' ) {
      this.router.navigate(['./Chainupdate']);
    }
    if ( ORNAMENT_TYPE === 'Chain with Pendant' ) {
      this.router.navigate(['./Chainpendatupdate']);
    }
    if ( ORNAMENT_TYPE === 'Bracelet' ) {
      this.router.navigate(['./Braceletupdate']);
    }
    if ( ORNAMENT_TYPE === 'Bangles' ) {
      this.router.navigate(['./Banglesupdate']);
    }
    if ( ORNAMENT_TYPE === 'Mangalsutra' ) {
      this.router.navigate(['./Mangalsutraupdate']);
    }
    if ( ORNAMENT_TYPE === 'Necklace' ) {
      this.router.navigate(['./Necklaceupdate']);
    }
    if ( ORNAMENT_TYPE === 'Nosepin' ) {
      this.router.navigate(['./Nosepinupdate']);
    }
    if ( ORNAMENT_TYPE === 'Pendant with Earring' ) {
      this.router.navigate(['./Pendantearring']);
    }
    if ( ORNAMENT_TYPE === 'Pendant' ) {
      this.router.navigate(['./Pendantupdate']);
    }
    if ( ORNAMENT_TYPE === 'Sets' ) {
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
        this.toastr.error(' Delete Operation Unsuccessful');
      }
    });
  }


 }
