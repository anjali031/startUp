import { Injectable } from '@angular/core';
import { User} from './user.model';
import { Password } from './password.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { JewellerInfo } from './jeweller-info.model';
import { Url } from 'url';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: JewellerInfo;
  occasion: number;
  readID: number;
  arr: any = [1, 2, 5];
  prev: string ;
  next: string;
  constructor( public http: HttpClient ) { }
  readonly rootURL = 'https://harshil21.pythonanywhere.com';

  asJeweler(user: User) {
    const body: User = {
      email: user.email,
      username: user.username,
      password: user.password,
      confirm_password: user.confirm_password,
      IS_JEWELLER: user.IS_JEWELLER
    };
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.rootURL + '/api/user/v1/register/', body, {headers : reqHeader});
  }




  loginUser(username, password) {
    const data = 'username=' + username + '&password=' + password + '&grant_type=password';
    const reqheaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    reqheaders.append('Authorization', 'Bearer');
    return this.http.post(this.rootURL + '/api/user/v1/login/', data , { headers: reqheaders });
  }

  changePassword(password: Password) {
    const data: Password = {
      old_password: password.old_password,
      new_password: password.new_password,
      confirm_new_password: password.confirm_new_password
    };
    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.put(this.rootURL + '/api/user/v1/change-password/', data,  {headers: Headers});
  }

  createView(jeweller: JewellerInfo) {
    const info: JewellerInfo = {
      NAME_OF_FIRM: jeweller.NAME_OF_FIRM,
      ADDRESS_OF_FIRM: jeweller.ADDRESS_OF_FIRM,
      CITY: jeweller.CITY,
      STATE: jeweller.STATE,
      CONTACT_NAME: jeweller.CONTACT_NAME,
      CONTACT_NUMBER: jeweller.CONTACT_NUMBER,
      CONTACT_MAIL_ID: jeweller.CONTACT_MAIL_ID,
      GST_NUMBER: jeweller.GST_NUMBER,
      PAN_NUMBER: jeweller.PAN_NUMBER,
      OWNER_NAME: jeweller.OWNER_NAME,
      OWNER_NUMBER: jeweller.OWNER_NUMBER,
      OWNER_EMAIL: jeweller.OWNER_EMAIL
    };
    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/jeweller-create/', info, {headers: Headers});
  }

  readForm() {
  const Headers = new HttpHeaders()
    .set('Authorization', 'token ' + localStorage.getItem('token'));
  return this.http.get(this.rootURL + '/api/jeweller/v1/detail/', {headers: Headers});
}

  readorn() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/ornament-list/?page=1', {headers: Headers});
  }

  r2() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.next, {headers: Headers});
  }

  r3() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.prev, {headers: Headers});
  }

  readid() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/', {headers: Headers});
  }
  deletebyid() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    // tslint:disable-next-line: max-line-length
    return this.http.delete(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/delete/', {headers: Headers});
  }
  ornmetal() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/metal/', {headers: Headers});
  }

  ornoccasion() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/occasion/', {headers: Headers});
  }

  ornGift() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/gift/', {headers: Headers});
  }

  ornTheme() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/theme/', {headers: Headers});
  }

  ornCurated() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/curatedby/', {headers: Headers});
  }

  ornFestival() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/festival/', {headers: Headers});
  }

  ornRstyle() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/ring-style/', {headers: Headers});
  }
  ornRsize() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/ring-size/', {headers: Headers});
  }

  ornBsize() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/bracelet-size/', {headers: Headers});
  }

  ornBanglesize() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/bangle-size/', {headers: Headers});
  }

  ornChainlength() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/chain-length/', {headers: Headers});
  }
  ornCenterWeight() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/center-stone-weight/', {headers: Headers});
  }
  ornCenterShape() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL + '/api/jeweller/v1/ornament/choice-field/center-stone-shape/', {headers: Headers});
  }

  update(jeweller: JewellerInfo) {
    const info: JewellerInfo = {
      NAME_OF_FIRM: jeweller.NAME_OF_FIRM,
      ADDRESS_OF_FIRM: jeweller.ADDRESS_OF_FIRM,
      CITY: jeweller.CITY,
      STATE: jeweller.STATE,
      CONTACT_NAME: jeweller.CONTACT_NAME,
      CONTACT_NUMBER: jeweller.CONTACT_NUMBER,
      CONTACT_MAIL_ID: jeweller.CONTACT_MAIL_ID,
      GST_NUMBER: jeweller.GST_NUMBER,
      PAN_NUMBER: jeweller.PAN_NUMBER,
      OWNER_NAME: jeweller.OWNER_NAME,
      OWNER_NUMBER: jeweller.OWNER_NUMBER,
      OWNER_EMAIL: jeweller.OWNER_EMAIL
    };
    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.put(this.rootURL + '/api/jeweller/v1/update/', info, {headers: Headers});
  }
    // tslint:disable-next-line: max-line-length
  multi(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any, themea: any, curateda: any, festia: any, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
      formData.append('ORNAMENT_METAL', i);
      } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  mli(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any,  themea: any,  curateda: any, festia: any, rsizea: any, ORNAMENT_RING_STYLE: string, center: any, stone: any,  gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {

    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {

    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {

    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {

    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_RING_STYLE', ORNAMENT_RING_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of rsizea) {
    formData.append('ORNAMENT_RING_SIZE', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }


  // tslint:disable-next-line: max-line-length
  ear(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any,  themea: any, curateda: any,  festia: any,  ORNAMENT_EARRING_STYLE: string, center: any, stone: any,  gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword  // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }


  // tslint:disable-next-line: max-line-length
  nosepin(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any, festia: any, ORNAMENT_NOSEPIN_STYLE: string, center: any, stone: any,  gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {

    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {

    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {

    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {

    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {

    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_NOSEPIN_STYLE', ORNAMENT_NOSEPIN_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  pendantwithearing(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any, themea: any, curateda: any, festia: any,  ORNAMENT_EARRING_STYLE: string, ORNAMENT_PENDANT_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT);
    // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword  // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
    formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  bracelet(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any, festia: any,  bsizea: any, ORNAMENT_BRACELET_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_BRACELET_STYLE', ORNAMENT_BRACELET_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of bsizea) {
    formData.append('ORNAMENT_BRACELET_SIZE', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  bangles(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any,  themea: any,  curateda: any,  festia: any,  bsizea: any,  ORNAMENT_BANGLE_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_BANGLE_STYLE', ORNAMENT_BANGLE_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of bsizea) {
    formData.append('ORNAMENT_BANGLE_SIZE', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

    // tslint:disable-next-line: max-line-length
  change(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any,  festia: any,  bsizea: any,  ORNAMENT_CHAIN_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT);
    // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of bsizea) {
    formData.append('ORNAMENT_CHAIN_LENGTH', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  chain(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any,  festia: any,  bsizea: any,  ORNAMENT_CHAIN_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of bsizea) {
    formData.append('ORNAMENT_CHAIN_LENGTH', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  necklace(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any,  festia: any, ORNAMENT_NECKLACE_STYLE: string, center: any, stone: any,  gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_NECKLACE_STYLE', ORNAMENT_NECKLACE_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }



  // tslint:disable-next-line: max-line-length
  chaitpen(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any,  festia: any,  bsizea: any,  ORNAMENT_CHAIN_STYLE: string, ORNAMENT_PENDANT_STYLE: string, center: any, stone: any,  gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of bsizea) {
    formData.append('ORNAMENT_CHAIN_LENGTH', i);
    }
    formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }
    // tslint:disable-next-line: max-line-length
  pendant(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any, themea: any, curateda: any, festia: any, ORNAMENT_PENDANT_STYLE: string, center: any, stone: any,  gem: any, color: any,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }
    // tslint:disable-next-line: max-line-length
  postupdate(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, ORNAMENT_OCCASION: string, ORNAMENT_GIFT: string, ORNAMENT_THEME: string, ORNAMENT_CURATED_BY: string, ORNAMENT_FESTIVAL: string, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT);
    formData.append('ORNAMENT_METAL', ORNAMENT_METAL);
    formData.append('ORNAMENT_OCCASION', ORNAMENT_OCCASION);
    formData.append('ORNAMENT_GIFT', ORNAMENT_GIFT);
    formData.append('ORNAMENT_THEME', ORNAMENT_THEME);
    formData.append('ORNAMENT_CURATED_BY', ORNAMENT_CURATED_BY);
    formData.append('ORNAMENT_FESTIVAL', ORNAMENT_FESTIVAL);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));    // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }
    // tslint:disable-next-line: max-line-length
  multiupdate( ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any, themea: any, curateda: any, festia: any, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
      formData.append('ORNAMENT_METAL', i);
      } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));    // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  muliupdate(ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion: any, asian: any, asan: any, asin: any, themea: any, themeb: any , curateda: any, curatedb: any, festia: any, festib: any, rsizea: any, rsizeb: any, ORNAMENT_RING_STYLE: string, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT);
    formData.append('ORNAMENT_METAL', ORNAMENT_METAL);
    formData.append('ORNAMENT_OCCASION', asion);
    formData.append('ORNAMENT_OCCASION', asian);
    formData.append('ORNAMENT_GIFT', asan);
    formData.append('ORNAMENT_GIFT', asin);
    formData.append('ORNAMENT_THEME', themea);
    formData.append('ORNAMENT_THEME', themeb);
    formData.append('ORNAMENT_CURATED_BY', curateda);
    formData.append('ORNAMENT_CURATED_BY', curatedb);
    formData.append('ORNAMENT_FESTIVAL', festia);
    formData.append('ORNAMENT_FESTIVAL', festib);
    formData.append('ORNAMENT_RING_STYLE', ORNAMENT_RING_STYLE);
    formData.append('ORNAMENT_RING_SIZE', rsizea);
    formData.append('ORNAMENT_RING_SIZE', rsizeb);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }
// tslint:disable-next-line: max-line-length
  mliupdate( ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any,  festia: any,  rsizea: any,  ORNAMENT_RING_STYLE: string, center: any, stone: any, gem: any, color: any,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {

    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {

    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {

    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {

    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_RING_STYLE', ORNAMENT_RING_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of rsizea) {
    formData.append('ORNAMENT_RING_SIZE', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }


  // tslint:disable-next-line: max-line-length
  earupdate( ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any, themea: any, curateda: any, festia: any, ORNAMENT_EARRING_STYLE: string, center: any, stone: any, gem: any, color: any,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }


  // tslint:disable-next-line: max-line-length
  nosepinupdate(ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any, festia: any,  ORNAMENT_NOSEPIN_STYLE: string, center: any, stone: any, gem: any, color: any,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {

    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {

    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {

    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {

    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {

    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('ORNAMENT_NOSEPIN_STYLE', ORNAMENT_NOSEPIN_STYLE);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  pendantwithearingupdate(ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any, themea: any, curateda: any, festia: any, ORNAMENT_EARRING_STYLE: string, ORNAMENT_PENDANT_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
    formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  braceletupdate( ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any,  themea: any,  curateda: any, festia: any, bsizea: any, ORNAMENT_BRACELET_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_BRACELET_STYLE', ORNAMENT_BRACELET_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of bsizea) {
    formData.append('ORNAMENT_BRACELET_SIZE', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  banglesupdate(ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any,  festia: any,  bsizea: any,  ORNAMENT_BANGLE_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    } // tslint:disable-next-line: no-var-keyword
    formData.append('ORNAMENT_BANGLE_STYLE', ORNAMENT_BANGLE_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of bsizea) {
    formData.append('ORNAMENT_BANGLE_SIZE', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  chainupdate(ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any, curateda: any,  festia: any,  bsizea: any,  ORNAMENT_CHAIN_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    } // tslint:disable-next-line: no-var-keyword
    formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of bsizea) {
    formData.append('ORNAMENT_CHAIN_LENGTH', i);
    }
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }

  // tslint:disable-next-line: max-line-length
  necklaceupdate(ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any,  curateda: any, festia: any,  ORNAMENT_NECKLACE_STYLE: string, center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT); // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_NECKLACE_STYLE', ORNAMENT_NECKLACE_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }



  // tslint:disable-next-line: max-line-length
  chaitpenupdate(ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any, asan: any, themea: any, curateda: any, festia: any,  bsizea: any,  ORNAMENT_CHAIN_STYLE: string, ORNAMENT_PENDANT_STYLE: string,  center: any, stone: any, gem: any, color: any, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT);
    // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
    // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of bsizea) {
    formData.append('ORNAMENT_CHAIN_LENGTH', i);
    }
    formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }
// tslint:disable-next-line: max-line-length
  pendantupdate( ORNAMENT_SHOPFOR: string , WEIGHT: string, metala: any, asion: any,  asan: any,  themea: any, curateda: any, festia: any,  ORNAMENT_PENDANT_STYLE: string,  center: any, stone: any, gem: any, color: any,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', localStorage.getItem('ORNAMENT_TYPE'));
    formData.append('ORNAMENT_MATERIAL', localStorage.getItem('ORNAMENT_MATERIAL'));
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT);
    // tslint:disable-next-line: no-var-keyword
    for (var i of metala) {
    formData.append('ORNAMENT_METAL', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asion) {
    formData.append('ORNAMENT_OCCASION', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of asan) {
    formData.append('ORNAMENT_GIFT', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of themea) {
    formData.append('ORNAMENT_THEME', i);
    } // tslint:disable-next-line: no-var-keyword
    for (var i of curateda) {
    formData.append('ORNAMENT_CURATED_BY', i);
    } // tslint:disable-next-line: no-var-keyword // tslint:disable-next-line: prefer-const
    for (var i of festia) {
    formData.append('ORNAMENT_FESTIVAL', i);
    }
    formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);
    formData.append('ORNAMENT_CENTER_STONE_WEIGHT', center);
    formData.append('ORNAMENT_CENTER_STONE_SHAPE', stone);
    formData.append('ORNAMENT_GEMSTONE', gem);
    formData.append('ORNAMENT_GEMSTONE_COLOR', color);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token')); // tslint:disable-next-line: max-line-length
    return this.http.put(this.rootURL + '/api/jeweller/v1/ornament/' + localStorage.getItem('ORNAMENT_ID') + '/update/', formData,  {headers: Headers});
  }
}
