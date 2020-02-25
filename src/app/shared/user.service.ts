import { Injectable } from '@angular/core';
import { User} from './user.model';
import { Password } from './password.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { JewellerInfo } from './jeweller-info.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: JewellerInfo;
  occasion: number;
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


  asCitizen(user: User) {
    const body: User = {
      email: user.email,
      username: user.username,
      password: user.password,
      confirm_password: user.confirm_password,
      IS_JEWELLER: user.IS_JEWELLER
    };
    const reqheader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.rootURL + '/api/user/v1/register/', body, {headers : reqheader});
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
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=1', {headers: Headers});
  }

  r2() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=2', {headers: Headers});
  }

  r3() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=3', {headers: Headers});
  }

  r4() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=4', {headers: Headers});
  }

  r5() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=5', {headers: Headers});
  }

  r6() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=6', {headers: Headers});
  }

  r7() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=7', {headers: Headers});
  }

  r8() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=8', {headers: Headers});
  }

  r9() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=9', {headers: Headers});
  }

  r10() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=10', {headers: Headers});
  }

  r11() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=11', {headers: Headers});
  }

  r12() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=12', {headers: Headers});
  }

  r13() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=13', {headers: Headers});
  }

  r14() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/ornament-list/?page=14', {headers: Headers});
  }

  ornoccasion() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/occasion/', {headers: Headers});
  }

  ornGift() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/gift/', {headers: Headers});
  }

  ornTheme() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/theme/', {headers: Headers});
  }

  ornCurated() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/curatedby/', {headers: Headers});
  }

  ornFestival() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/festival/', {headers: Headers});
  }

  ornRstyle() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/ring-style/', {headers: Headers});
  }
  ornRsize() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/ring-size/', {headers: Headers});
  }

  ornBsize() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/bracelet-size/', {headers: Headers});
  }

  ornBanglesize() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/bangle-size/', {headers: Headers});
  }

  ornChainlength() {
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.get(this.rootURL+'/api/jeweller/v1/ornament/choice-field/chain-length/', {headers: Headers});
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

  postFile(ORNAMENT_TYPE: string, ORNAMENT_MATERIAL: string, ORNAMENT_SHOPFOR: string, WEIGHT: string, ORNAMENT_METAL: string, ORNAMENT_OCCASION: string, ORNAMENT_GIFT: string, ORNAMENT_THEME: string, ORNAMENT_CURATED_BY: string, ORNAMENT_FESTIVAL: string,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File, fileToUploadthree: File, ) {
    const formData: FormData = new FormData();
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);
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
    const Headers = new HttpHeaders().set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData, {headers: Headers});
  }
  postFill(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  postFiel(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
    formData.append('ORNAMENT_SHOPFOR', ORNAMENT_SHOPFOR);
    formData.append('WEIGHT', WEIGHT);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  postFeil(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, ORNAMENT_OCCASION: string, ORNAMENT_GIFT: string, ORNAMENT_THEME: string, ORNAMENT_CURATED_BY: string, ORNAMENT_FESTIVAL: string, fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
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
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  multi(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  muli(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any, rsizea: any,rsizeb: any, ORNAMENT_RING_STYLE: string,fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  ear(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any,ORNAMENT_EARRING_STYLE: string,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);

    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }


  nosepin(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any,ORNAMENT_NOSEPIN_STYLE: string,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('ORNAMENT_NOSEPIN_STYLE', ORNAMENT_NOSEPIN_STYLE);

    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  pendantwithearing(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any,ORNAMENT_EARRING_STYLE: string,ORNAMENT_PENDANT_STYLE: string,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('ORNAMENT_EARRING_STYLE', ORNAMENT_EARRING_STYLE);
    formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);

    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  bracelet(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any, bsizea: any,bsizeb: any, ORNAMENT_BRACELET_STYLE: string,fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('ORNAMENT_BRACELET_STYLE', ORNAMENT_BRACELET_STYLE);
    formData.append('ORNAMENT_BRACELET_SIZE', bsizea);
    formData.append('ORNAMENT_BRACELET_SIZE', bsizeb);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  bangles(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any, bsizea: any,bsizeb: any, ORNAMENT_BANGLE_STYLE: string,fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('ORNAMENT_BANGLE_STYLE', ORNAMENT_BANGLE_STYLE);
    formData.append('ORNAMENT_BANGLE_SIZE', bsizea);
    formData.append('ORNAMENT_BANGLE_SIZE', bsizeb);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  chain(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any, bsizea: any,bsizeb: any, ORNAMENT_CHAIN_STYLE: string,fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
    formData.append('ORNAMENT_CHAIN_LENGTH', bsizea);
    formData.append('ORNAMENT_CHAIN_LENGTH', bsizeb);
    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  necklace(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any,ORNAMENT_NECKLACE_STYLE: string,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('ORNAMENT_NECKLACE_STYLE', ORNAMENT_NECKLACE_STYLE);

    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }



  chaitpen(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any, bsizea: any,bsizeb: any, ORNAMENT_CHAIN_STYLE: string, ORNAMENT_PENDANT_STYLE: string,fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('ORNAMENT_CHAIN_STYLE', ORNAMENT_CHAIN_STYLE);
    formData.append('ORNAMENT_CHAIN_LENGTH', bsizea);
    formData.append('ORNAMENT_CHAIN_LENGTH', bsizeb);
    formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);

    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

  pendant(ORNAMENT_TYPE: string , ORNAMENT_MATERIAL: string , ORNAMENT_SHOPFOR: string , WEIGHT: string, ORNAMENT_METAL: string, asion : any, asian: any, asan:any, asin: any, themea: any,themeb: any ,curateda: any,curatedb: any,festia: any,festib:any,ORNAMENT_PENDANT_STYLE: string,  fileToUpload: File, fileToUploadone: File, fileToUploadtwo: File , fileToUploadthree: File) {
    const formData: FormData = new FormData();
    formData.append('ORNAMENT_TYPE', ORNAMENT_TYPE);
    formData.append('ORNAMENT_MATERIAL', ORNAMENT_MATERIAL);
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
    formData.append('ORNAMENT_PENDANT_STYLE', ORNAMENT_PENDANT_STYLE);

    formData.append('CAD_FILE', fileToUpload, fileToUpload.name);
    formData.append('IMAGE_FILE_ONE', fileToUploadone, fileToUploadone.name);
    formData.append('IMAGE_FILE_TWO', fileToUploadtwo, fileToUploadtwo.name);
    formData.append('IMAGE_FILE_THREE', fileToUploadthree, fileToUploadthree.name);

    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.post(this.rootURL + '/api/jeweller/v1/ornament/ornament-create/', formData,  {headers: Headers});
  }

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
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.put(this.rootURL + '/api/jeweller/v1/1/ornament/15/update/', formData,  {headers: Headers});
  }
}
