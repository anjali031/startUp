import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-chainwithpendant',
  templateUrl: './chainwithpendant.component.html',
  styleUrls: ['./chainwithpendant.component.css']
})
export class ChainwithpendantComponent implements OnInit {
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
  Bsize: any = {};


  asion: any = [];
  asian: any = [5];
  asan: any = [];
  asin: any = [3];
  themea: any = [];
  themeb: any = [7];
  curateda: any = [];
  curatedb: any = [6];
  festia: any = [];
  festib: any = [8];
  bsizea: any = [];
  bsizeb: any = [5];



  constructor(private userService: UserService) { }

  ngOnInit() {
    this.read();
    this.occasion();
    this.gift();
    this.theme();
    this.curatedby();
    this.festival();
    this.Banglesize();
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
    this.userService.ornCurated().subscribe(data=> {
      console.log(data);
      this.Curated =data;
    });
  }

  festival() {
    this.userService.ornFestival().subscribe(data=> {
      console.log(data);
      this.Festival = data;
    });
  }

  Banglesize() {
    this.userService.ornChainlength().subscribe(data => {
      console.log(data);
      this.Bsize = data;
    });
  }

  

  Answer(pk) {
    console.log(pk);
    this.asion = pk;
    console.log(this.asion);

  }
  Ornagift(k) {
    console.log(k);
    this.asan = k;
    console.log(this.asan);

  }

  Ornatheme(k) {
    console.log(k);
    this.themea = k;
    console.log(this.themea);
    console.log(this.themeb);

  }

  OrnaCurated(k) {
    console.log(k);
    this.curateda = k;
    console.log(this.curateda);
    console.log(this.curatedb);

  }

  Ornafesti(k) {
    console.log(k);
    this.festia = k;
    console.log(this.festia);
    console.log(this.festib);

  }


  Size(k) {
    console.log(k);
    this.bsizea = k;
    console.log(this.bsizea);
    console.log(this.bsizeb);

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

  OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT ,ORNAMENT_METAL,ORNAMENT_OCCASION, ORNAMENT_GIFT,ORNAMENT_THEME,ORNAMENT_CURATED_BY,ORNAMENT_FESTIVAL,ORNAMENT_CHAIN_LENGTH,ORNAMENT_CHAIN_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE , IMAGE_FILE_ONE, IMAGE_FILE_TWO,IMAGE_FILE_THREE){
    this.userService.chaitpen(ORNAMENT_TYPE.value ,ORNAMENT_MATERIAL.value ,ORNAMENT_SHOPFOR.value ,WEIGHT.value,ORNAMENT_METAL.value,this.asion,this.asian, this.asan,this.asin,this.themea, this.themeb, this.curateda ,this.curatedb, this.festia,this.festib,this.bsizea, this.bsizeb, ORNAMENT_CHAIN_STYLE.value,ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(
      data => {
        console.log('done', data);
      }
    );
   }
}
