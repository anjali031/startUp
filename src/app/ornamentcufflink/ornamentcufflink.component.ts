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

  cufflink() {
    this.router.navigate(['/cufflink']);
  }
pendantwithearing() {
  this.router.navigate(['/Pendantearringtype']);
}
pendant() {
  this.router.navigate(['/Pendant']);
}
chain() {
  this.router.navigate(['/chain']);
}
sets() {
  this.router.navigate(['/set']);
}
Mangalsutra() {
  this.router.navigate(['/mangalsutra']);
}
necklace() {
  this.router.navigate(['/Necklace']);
}
chainwithpendant() {
  this.router.navigate(['/chainwithpendant']);
}
bangles() {
  this.router.navigate(['/Bangles']);
}
bracelet() {
  this.router.navigate(['/Bracelet']);
}
earring() {
  this.router.navigate(['/Ornaearringtype']);
}
nosepin() {
  this.router.navigate(['/nosepin']);
}
 ring() {
  this.router.navigate(['/Ornaringtype']);
 }
}

