import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-createvieu',
  templateUrl: './createvieu.component.html',
  styleUrls: ['./createvieu.component.css']
})
export class CreatevieuComponent implements OnInit {
  fileToUpload: File = null;
  fileToUploadone: File = null;
  fileToUploadtwo: File = null;
  fileToUploadthree: File = null;
  anni: any = {};
  annj: any = {};
  annk: any = {};
  data: any = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.read();
  }

  read() {
    this.userService.readorn().subscribe( data => {
      console.log(data);
    });
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

  OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT ,ORNAMENT_METAL,ORNAMENT_OCCASION, ORNAMENT_GIFT,ORNAMENT_THEME,ORNAMENT_CURATED_BY,ORNAMENT_FESTIVAL, CAD_FILE , IMAGE_FILE_ONE, IMAGE_FILE_TWO,IMAGE_FILE_THREE){
    this.userService.postFeil(ORNAMENT_TYPE.value ,ORNAMENT_MATERIAL.value ,ORNAMENT_SHOPFOR.value ,WEIGHT.value,ORNAMENT_METAL.value,ORNAMENT_OCCASION.value, ORNAMENT_GIFT.value, ORNAMENT_THEME.value, ORNAMENT_CURATED_BY.value, ORNAMENT_FESTIVAL.value,this.fileToUpload, this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(
      data => {
        console.log('done', data);
      }
    );
   }
}
