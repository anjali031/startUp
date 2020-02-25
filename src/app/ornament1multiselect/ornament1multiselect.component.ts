import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-ornament1multiselect',
  templateUrl: './ornament1multiselect.component.html',
  styleUrls: ['./ornament1multiselect.component.css']
})
export class Ornament1multiselectComponent implements OnInit {
  fileToUpload: File = null;
  fileToUploadone: File = null;
  fileToUploadtwo: File = null;
  fileToUploadthree: File = null;
  anni: any = {};
  annj: any = {};
  annk: any = {};
  data: any = {};
  Occasion: any = {};
  asion: any = [];
  asian: any = [5];
  asan: any = [3];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.read();
    this.occasion();
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

  Wedding() {
    console.log();
    // this.asion = pk;
    if ((document.getElementById('Wedding')as HTMLInputElement).checked) {
      this.asion = (document.getElementById('Wedding')as HTMLInputElement).value;
      this.asan = (document.getElementById('Wedding')as HTMLInputElement).value;
      // this.asian = (document.getElementById('Wedding')as HTMLInputElement).value;

      console.log('value', this.asion);

    }
    // this.asan.pop(0);
    // this.asan = pk;
    console.log(this.asion);
    console.log(this.asian);
    console.log(this.asan);

  }

  Anniversary() {
    if ((document.getElementById('Anniversary')as HTMLInputElement).checked) {
      this.asian = (document.getElementById('Anniversary')as HTMLInputElement).value;

      console.log('value', this.asion);

    }
    // this.asan.pop(0);
    // this.asan = pk;
    console.log(this.asion);
    console.log(this.asian);
    console.log(this.asan);

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


}
