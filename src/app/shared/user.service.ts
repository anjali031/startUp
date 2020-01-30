import { Injectable } from '@angular/core';
import { User} from './user.model';
import { Password } from './password.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http: HttpClient ) { }

  asJeweler(user: User) {
    const body: User = {
      email: user.email,
      username: user.username,
      password: user.password,
      confirm_password: user.confirm_password,
      IS_JEWELLER: user.IS_JEWELLER
    };
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://harshil21.pythonanywhere.com/api/user/v1/register/', body, {headers : reqHeader});
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
    return this.http.post('http://harshil21.pythonanywhere.com/api/user/v1/register/', body, {headers : reqheader});
  }

  loginUser(username, password) {
    const data = 'username=' + username + '&password=' + password + '&grant_type=password';
    const reqheaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    reqheaders.append('Authorization', 'Bearer');
    return this.http.post('http://harshil21.pythonanywhere.com/api/user/v1/login/', data , { headers: reqheaders });
  }

  changePassword(password: Password) {
    const data: Password = {
      old_password: password.old_password,
      new_password: password.new_password,
      confirm_new_password: password.confirm_new_password
    };
    const Headers = new HttpHeaders()
      .set('Authorization', 'token ' + localStorage.getItem('token'));
    return this.http.put('http://harshil21.pythonanywhere.com/api/user/v1/change-password/', data,  {headers: Headers});
  }


}
