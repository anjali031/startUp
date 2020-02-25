import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-jewelornam',
  templateUrl: './jewelornam.component.html',
  styleUrls: ['./jewelornam.component.css']
})
export class JewelornamComponent implements OnInit {
  imageUrl = '/assets/image/default-image.png';
  fileToUpload: File = null;
  fileToUploadone: File = null;
  fileToUploadtwo: File = null;
  fileToUploadthree: File = null;


  constructor(private quizService: UserService) { }

  ngOnInit() {
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  handleFileoneInput(file: FileList) {
    this.fileToUploadone = file.item(1);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUploadone);
  }
  handleFiletwoInput(file: FileList) {
    this.fileToUploadtwo = file.item(2);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUploadtwo);
  }
  handleFilethreeInput(file: FileList) {
    this.fileToUploadthree = file.item(3);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUploadthree);
  }

  OnSubmit(ORNAMENT_TYPE, ORNAMENT_MATERIAL, ORNAMENT_SHOPFOR, WEIGHT, ORNAMENT_METAL, ORNAMENT_OCCASION, ORNAMENT_GIFT, ORNAMENT_THEME, ORNAMENT_CURATED_BY, ORNAMENT_FESTIVAL, CAD_FILE, IMAGE_FILE_ONE, IMAGE_FILE_TWO, IMAGE_FILE_THREE) {
   this.quizService.postFile(ORNAMENT_TYPE.value, ORNAMENT_MATERIAL.value, ORNAMENT_SHOPFOR.value, WEIGHT.value, ORNAMENT_METAL.value,ORNAMENT_OCCASION.value,ORNAMENT_GIFT.value,ORNAMENT_THEME.value,ORNAMENT_CURATED_BY.value,ORNAMENT_FESTIVAL.value, this.fileToUpload ,this.fileToUploadone, this.fileToUploadtwo, this.fileToUploadthree).subscribe(
     data => {
       console.log('done', data);
       ORNAMENT_TYPE.value = null;
       ORNAMENT_MATERIAL.value = null;
       ORNAMENT_SHOPFOR.value = null;
       WEIGHT.value = null;
       ORNAMENT_METAL.value = null;
       ORNAMENT_OCCASION.value = null;
       ORNAMENT_GIFT.value = null;
       ORNAMENT_THEME.value = null;
       ORNAMENT_CURATED_BY.value = null;
       ORNAMENT_FESTIVAL.value = null;
       CAD_FILE.value = null;
       IMAGE_FILE_ONE.value = null;
       IMAGE_FILE_TWO.value = null;
       IMAGE_FILE_THREE.value = null;
       this.imageUrl = '/assets/image/default-image.png';
     }
   );
  }
}
