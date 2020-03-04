import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ornaearringtype',
  templateUrl: './ornaearringtype.component.html',
  styleUrls: ['./ornaearringtype.component.css']
})
export class OrnaearringtypeComponent implements OnInit {
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
  Metal: any = {};

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
  metala: any = [];
  metalb: any = [];



  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.read();
    this.occasion();
    this.gift();
    this.theme();
    this.curatedby();
    this.festival();
    this.metal();

  }

  read() {
    this.userService.readorn().subscribe( data => {
      console.log(data);
    });
  }

  metal() {
    this.userService.ornmetal().subscribe( data => {
      console.log(data);
      this.Metal = data;
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


  Ornmetal(pk) {
    console.log(pk);
    if ((document.getElementById('zero')as HTMLInputElement).checked ) {
      (document.getElementById('zero')as HTMLInputElement).checked = false;
      alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
      this.metalb.push(pk);
      this.metala = [];
      console.log(this.metala);
      console.log(this.metalb);
    } else {
      this.metalb.push(pk);
      console.log(this.metala);
      console.log(this.metalb);
    }

  }

  zero() {
    if ((document.getElementById('zero')as HTMLInputElement).checked) {
      if (this.metalb.length == 0 ) {
        (document.getElementById('zero')as HTMLInputElement).checked = false;
        // tslint:disable-next-line: max-line-length
        alert('you cannot confirm your option without selecting any, select your option and then confirm');
      } else {
      var a = [], b = [], prev;
      this.metalb.sort();
      for ( var i = 0; i < this.metalb.length; i++ ) {
        if ( this.metalb[i] !== prev ) {
            a.push(this.metalb[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = this.metalb[i];
      }
      // return [a, b];
      var i = 0;
      for (var j = 0; j < b.length; j++) {
        if (b[j] % 2 === 0) {

        } else {
            this.metala.push(a[i]);
        }
        i = i + 1;
      }
      console.log ('metala', this.metala);
    }} else {
      this.metala = [];
      console.log ('metala', this.metala);

    }
  }

  Answer(pk) {
    console.log(pk);
    if ((document.getElementById('1')as HTMLInputElement).checked ) {
      (document.getElementById('1')as HTMLInputElement).checked = false;
      alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
      this.asian.push(pk);
      this.asion = [];
      console.log(this.asion);
      console.log(this.asian);
    } else {
      this.asian.push(pk);
      console.log(this.asion);
      console.log(this.asian);
    }

  }
  one() {
    if ((document.getElementById('1')as HTMLInputElement).checked) {
      if (this.asian.length == 0 ) {
        (document.getElementById('1')as HTMLInputElement).checked = false;
        // tslint:disable-next-line: max-line-length
        alert('you cannot confirm your option without selecting any, select your option and then confirm');
      } else {
      var a = [], b = [], prev;
      this.asian.sort();
      for ( var i = 0; i < this.asian.length; i++ ) {
        if ( this.asian[i] !== prev ) {
            a.push(this.asian[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = this.asian[i];
      }
      // return [a, b];
      var i = 0;
      for (var j = 0; j < b.length; j++) {
        if (b[j] % 2 === 0) {

        } else {
            this.asion.push(a[i]);
        }
        i = i + 1;
      }
      console.log ('asion', this.asion);
    }} else {
      this.asion = [];
      console.log ('asion', this.asion);

    }
  }
  Ornagift(k) {
    console.log(k);
    if ((document.getElementById('2')as HTMLInputElement).checked ) {
      (document.getElementById('2')as HTMLInputElement).checked = false;
      alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
      this.asin.push(k);
      this.asan = [];
      console.log(this.asan);
      console.log(this.asin);
    } else {
      this.asin.push(k);
      console.log(this.asan);
      console.log(this.asin);
    }

  }
  two() {
    if ((document.getElementById('2')as HTMLInputElement).checked) {
      if (this.asin.length == 0 ) {
        (document.getElementById('2')as HTMLInputElement).checked = false;
        // tslint:disable-next-line: max-line-length
        alert('you cannot confirm your option without selecting any, select your option and then confirm');
      } else {
      var a = [], b = [], prev;
      this.asin.sort();
      for ( var i = 0; i < this.asin.length; i++ ) {
        if ( this.asin[i] !== prev ) {
            a.push(this.asin[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = this.asin[i];
      }
      // return [a, b];
      var i = 0;
      for (var j = 0; j < b.length; j++) {
        if (b[j] % 2 === 0) {

        } else {
            this.asan.push(a[i]);
        }
        i = i + 1;
      }
      console.log ('asan', this.asan);
    }} else {
      this.asan = [];
      console.log ('asan', this.asan);

    }
  }

  Ornatheme(k) {
    console.log(k);
    if ((document.getElementById('3')as HTMLInputElement).checked ) {
      (document.getElementById('3')as HTMLInputElement).checked = false;
      alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
      this.themeb.push(k);
      this.themea = [];
      console.log(this.themea);
      console.log(this.themeb);
    } else {
      this.themeb.push(k);
      console.log(this.themea);
      console.log(this.themeb);
    }

  }
  three() {
    if ((document.getElementById('3')as HTMLInputElement).checked) {
      if (this.themeb.length == 0 ) {
        (document.getElementById('3')as HTMLInputElement).checked = false;
        // tslint:disable-next-line: max-line-length
        alert('you cannot confirm your option without selecting any, select your option and then confirm');
      } else {
      var a = [], b = [], prev;
      this.themeb.sort();
      for ( var i = 0; i < this.themeb.length; i++ ) {
        if ( this.themeb[i] !== prev ) {
            a.push(this.themeb[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = this.themeb[i];
      }
      // return [a, b];
      var i = 0;
      for (var j = 0; j < b.length; j++) {
        if (b[j] % 2 === 0) {

        } else {
            this.themea.push(a[i]);
        }
        i = i + 1;
      }
      console.log ('themea', this.themea);
    }} else {
      this.themea = [];
      console.log ('themea', this.themea);

    }
  }

  OrnaCurated(k) {
    console.log(k);
    if ((document.getElementById('4')as HTMLInputElement).checked ) {
      (document.getElementById('4')as HTMLInputElement).checked = false;
      alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
      this.curatedb.push(k);
      this.curateda = [];
      console.log(this.curateda);
      console.log(this.curatedb);
    } else {
      this.curatedb.push(k);
      console.log(this.curateda);
      console.log(this.curatedb);
    }

  }

  four() {
    if ((document.getElementById('4')as HTMLInputElement).checked) {
      if (this.curatedb.length == 0 ) {
        (document.getElementById('4')as HTMLInputElement).checked = false;
        // tslint:disable-next-line: max-line-length
        alert('you cannot confirm your option without selecting any, select your option and then confirm');
      } else {
      var a = [], b = [], prev;
      this.curatedb.sort();
      for ( var i = 0; i < this.curatedb.length; i++ ) {
        if ( this.curatedb[i] !== prev ) {
            a.push(this.curatedb[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = this.curatedb[i];
      }
      // return [a, b];
      var i = 0;
      for (var j = 0; j < b.length; j++) {
        if (b[j] % 2 === 0) {

        } else {
            this.curateda.push(a[i]);
        }
        i = i + 1;
      }
      console.log ('curateda', this.curateda);
    }} else {
      this.curateda = [];
      console.log ('curateda', this.curateda);

    }
  }


  Ornafesti(k) {
    console.log(k);
    if ((document.getElementById('5')as HTMLInputElement).checked ) {
      (document.getElementById('5')as HTMLInputElement).checked = false;
      alert('you cannot confirm selected option if you are still selecting, select your desired option and then confirm the selected');
      this.festib.push(k);
      this.festia = [];
      console.log(this.festia);
      console.log(this.festib);
    } else {
      this.festib.push(k);
      console.log(this.festia);
      console.log(this.festib);
    }

  }

  five() {
    if ((document.getElementById('5')as HTMLInputElement).checked) {
      if (this.festib.length == 0 ) {
        (document.getElementById('5')as HTMLInputElement).checked = false;
        // tslint:disable-next-line: max-line-length
        alert('you cannot confirm your option without selecting any, select your option and then confirm');
      } else {
      var a = [], b = [], prev;
      this.festib.sort();
      for ( var i = 0; i < this.festib.length; i++ ) {
        if ( this.festib[i] !== prev ) {
            a.push(this.festib[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = this.festib[i];
      }
      // return [a, b];
      var i = 0;
      for (var j = 0; j < b.length; j++) {
        if (b[j] % 2 === 0) {

        } else {
            this.festia.push(a[i]);
        }
        i = i + 1;
      }
      console.log ('festia', this.festia);
    }} else {
      this.festia = [];
      console.log ('festia', this.festia);

    }
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

  OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT ,ORNAMENT_METAL,ORNAMENT_OCCASION, ORNAMENT_GIFT,ORNAMENT_THEME,ORNAMENT_CURATED_BY,ORNAMENT_FESTIVAL,ORNAMENT_EARRING_STYLE, CAD_FILE , IMAGE_FILE_ONE, IMAGE_FILE_TWO,IMAGE_FILE_THREE){
    // tslint:disable-next-line: max-line-length
    if (this.asion.length == 0 || this.asan.length == 0 || this.themea.length == 0 || this.curateda.length == 0 || this.metala.length == 0 || this.festia.length == 0) {
      alert('check the confirmation checkboxex to proceed');
    } else {
    this.userService.ear(ORNAMENT_TYPE.value ,ORNAMENT_MATERIAL.value ,ORNAMENT_SHOPFOR.value ,WEIGHT.value,this.metala,this.asion, this.asan, this.themea, this.curateda ,this.festia, ORNAMENT_EARRING_STYLE.value, this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(
      (data: any) => {
        console.log('done', data);
        if (data.status == 201) {
          this.toastr.success('Ornament Succesfully Created');
          this.router.navigate(['./ornamentread']);
        }
      }
    );
   }}
}
