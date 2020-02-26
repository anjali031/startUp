import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-pendantearringtype',
  templateUrl: './pendantearringtype.component.html',
  styleUrls: ['./pendantearringtype.component.css']
})
export class PendantearringtypeComponent implements OnInit {
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


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.read();
    this.occasion();
    this.gift();
    this.theme();
    this.curatedby();
    this.festival();
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

  OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT ,ORNAMENT_METAL,ORNAMENT_OCCASION, ORNAMENT_GIFT,ORNAMENT_THEME,ORNAMENT_CURATED_BY,ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE,ORNAMENT_PENDANT_STYLE, CAD_FILE , IMAGE_FILE_ONE, IMAGE_FILE_TWO,IMAGE_FILE_THREE){
    this.userService.pendantwithearing(ORNAMENT_TYPE.value ,ORNAMENT_MATERIAL.value ,ORNAMENT_SHOPFOR.value ,WEIGHT.value,ORNAMENT_METAL.value,this.asion,this.asian, this.asan,this.asin,this.themea, this.themeb, this.curateda ,this.curatedb, this.festia,this.festib,ORNAMENT_EARRING_STYLE.value,ORNAMENT_PENDANT_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(
      (data: any) => {
        console.log('done', data);
        if (data.status == 201) {
          alert('Success');
        }
      }
    );
   }
}
