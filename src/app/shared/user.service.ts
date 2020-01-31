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
  constructor( public http: HttpClient ) { }
  readonly rootURL = 'http://harshil21.pythonanywhere.com'
  asJeweler(user: User) {
    const body: User = {
      email: user.email,
      username: user.username,
      password: user.password,
      confirm_password: user.confirm_password,
      IS_JEWELLER: user.IS_JEWELLER
    };
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.rootURL+'/api/user/v1/register/', body, {headers : reqHeader});
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
    return this.http.post(this.rootURL+'/api/user/v1/register/', body, {headers : reqheader});
  }

  loginUser(username, password) {
    const data = 'username=' + username + '&password=' + password + '&grant_type=password';
    const reqheaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    reqheaders.append('Authorization', 'Bearer');
    return this.http.post(this.rootURL+'/api/user/v1/login/', data , { headers: reqheaders });
  }

  changePassword(password: Password) {
    const data: Password = {
      old_password: password.old_password,
      new_password: password.new_password,
      confirm_new_password: password.confirm_new_password
    };
    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.put(this.rootURL+'/api/user/v1/change-password/', data,  {headers: Headers});
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
    return this.http.post(this.rootURL+'/api/jeweller/v1/jeweller-create/', info, {headers: Headers});
  }

  readForm() {
  const Headers = new HttpHeaders()
    .set('Authorization', 'token ' + localStorage.getItem('token'));
  return this.http.get(this.rootURL+'/api/jeweller/v1/3/', {headers: Headers});
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
    return this.http.put(this.rootURL+'/api/jeweller/v1/3/update/', info, {headers: Headers});
  }
}
