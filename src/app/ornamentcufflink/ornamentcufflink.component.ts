import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ornamentcufflink',
  templateUrl: './ornamentcufflink.component.html',
  styleUrls: ['./ornamentcufflink.component.css']
})
export class OrnamentcufflinkComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

 gemOption(value) {
   if (value === '1') {
     this.router.navigate(['/Ornaringtype']);
   }
   if (value === '2') {
    this.router.navigate(['/nosepin']);
  }
   if (value === '3') {
    this.router.navigate(['/Ornaearringtype']);
  }
   if (value === '4') {
    this.router.navigate(['/Bracelet']);
  }
   if (value === '5') {
    this.router.navigate(['/Bangles']);
  }
   if (value === '6') {
    this.router.navigate(['/chainwithpendant']);
  }
   if (value === '7') {
    this.router.navigate(['/Necklace']);
  }
   if (value === '8') {
    this.router.navigate(['/mangalsutra']);
  }
   if (value === '9') {
    this.router.navigate(['/set']);
  }
   if (value === '10') {
    this.router.navigate(['/chain']);
  }
   if (value === '11') {
    this.router.navigate(['/Pendant']);
  }
   if (value === '12') {
    this.router.navigate(['/Pendantearringtype']);
  }
   if (value === '13') {
    this.router.navigate(['/cufflink']);
  }
 }
}

