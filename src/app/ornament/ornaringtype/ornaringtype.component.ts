import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-ornaringtype',
  templateUrl: './ornaringtype.component.html',
  styleUrls: ['./ornaringtype.component.css']
})
export class OrnaringtypeComponent implements OnInit {
  fileToUpload: File = null;
  fileToUploadone: File = null;
  fileToUploadtwo: File = null;
  fileToUploadthree: File = null;
  anni: any = {};
  annj: any = {};
  annk: any = {};
  data: any = {};
  Occasion: any = {};
  Gift: any = {};
  Theme: any = {};
  Curated: any = {};
  Festival: any = {};
  Ringsize: any = {};
  ORNAMENT_OCCASION = '';
  arr: any = [1, 2, 3, 4];


  asion: any = [];
  asian: any = [];
  asan: any = [];
  asin: any = [];
  themea: any = [];
  themeb: any = [];
  curateda: any = [];
  curatedb: any = [];
  festia: any = [];
  festib: any = [];
  rsizea: any = [];
  rsizeb: any = [];
  letsee: any = [3, 5, 7];
  leA: any = [];
  leB: any = [];
  leC: any = [];
  one: any = [];
  two: any = [];
  three: any = [];
  four: any = [];
  five: any = [];
  six: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.read();
    this.occasion();
    this.gift();
    this.theme();
    this.curatedby();
    this.festival();
    this.ringsize();
    this.see();
  }

  main() {
    for (let  i of this.arr) {
      console.log('Ornameny_type' + ':' + i);
    }
  }
  
  see() {
    this.leA.push(this.letsee[0]);
    this.leB.push(this.letsee[1]);
    this.leC.push(this.letsee[2]);
    console.log(this.leA);
    console.log(this.leB);
    console.log(this.leC);
  }

  read() {
    this.userService.readorn().subscribe( data => {
      console.log(data);
    });
  }

  occasion() {
    this.userService.ornoccasion().subscribe( data => {
      console.log(data);
      this.Occasion = data;
    });
  }

  gift() {
    this.userService.ornGift().subscribe( data => {
      console.log(data);
      this.Gift = data;
    });
  }

  theme() {
    this.userService.ornTheme().subscribe(data => {
      console.log(data);
      this.Theme = data;
    });
  }

  curatedby() {
    this.userService.ornCurated().subscribe(data => {
      console.log(data);
      this.Curated = data;
    });
  }

  festival() {
    this.userService.ornFestival().subscribe(data => {
      console.log(data);
      this.Festival = data;
    });
  }

  ringsize() {
    this.userService.ornRsize().subscribe(data => {
      console.log(data);
      this.Ringsize = data;
    });
  }



  Answer(pk) {
    // console.log(pk);
    this.one.push(pk);
    console.log('the list ', this.one);
    if (this.one.length === 2) {
      this.asion.push(this.one[0]);
      this.asian.push(this.one[1]);
      console.log('extrat', this.asion);
      console.log('ertart', this.asian);
    }
    // this.asion.push(this.one[0]);
    // this.asian.push(this.one[1]);
    // this.leC.push(this.letsee[2]);

    // console.log(this.leC);


  }
  Ornagift(k) {
    this.two.push(k);
    console.log('the list ', this.two);
    if (this.two.length === 2) {
      this.asan.push(this.two[0]);
      this.asin.push(this.two[1]);
      console.log('extrat', this.asan);
      console.log('ertart', this.asin);
    }
  }

  Ornatheme(k) {
    this.three.push(k);
    console.log('the list ', this.three);
    if (this.three.length === 2) {
      this.themea.push(this.three[0]);
      this.themeb.push(this.three[1]);
      console.log('extrat', this.themea);
      console.log('ertart', this.themeb); }

  }

  OrnaCurated(k) {
    this.four.push(k);
    console.log('the list ', this.four);
    if (this.four.length === 2) {
      this.curateda.push(this.four[0]);
      this.curatedb.push(this.four[1]);
      console.log('extrat', this.curateda);
      console.log('ertart', this.curatedb); }
  }

  Ornafesti(k) {
    this.five.push(k);
    console.log('the list ', this.five);
    if (this.five.length === 2) {
      this.festia.push(this.five[0]);
      this.festib.push(this.five[1]);
      console.log('extrat', this.festia);
      console.log('ertart', this.festib); }
  }


  Size(k) {
    this.six.push(k);
    console.log('the list ', this.six);
    if (this.six.length === 2) {
      this.rsizea.push(this.six[0]);
      this.rsizeb.push(this.six[1]);
      console.log('extrat', this.rsizea);
      console.log('ertart', this.rsizeb); }

  }


  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
  }

  handleFileInputone(file: FileList) {
    this.fileToUploadone = file.item(0);
  }

  handleFileInputtwo(file: FileList) {
    this.fileToUploadtwo = file.item(0);
  }

  handleFileInputthree(file: FileList) {
    this.fileToUploadthree = file.item(0);
  }

  // tslint:disable-next-line: max-line-length
  OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT , ORNAMENT_METAL, ORNAMENT_RING_STYLE) {
    // tslint:disable-next-line: max-line-length
    this.userService.muli(ORNAMENT_TYPE.value , ORNAMENT_MATERIAL.value , ORNAMENT_SHOPFOR.value , WEIGHT.value, ORNAMENT_METAL.value, this.asion, this.asian, this.asan, this.asin, this.themea, this.themeb, this.curateda , this.curatedb, this.festia, this.festib, this.rsizea, this.rsizeb, ORNAMENT_RING_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(
      data => {
        console.log('done', data);
      }
    );
   }
}
