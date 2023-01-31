import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { 
  }

  public getRoles() {
    return this.http.get<any>("https://api.dev.padcllc.com/role/all");
  }

  public signUp(data: any) {
    const { roleId, ...user } = data;
    user.roleId = +roleId;
    return this.http.post<any>('https://api.dev.padcllc.com/auth/registration', user)
  }
  login(user: any) {
    return this.http.post<any>("https://api.dev.padcllc.com/auth/login", user);
  }
  
  public logout(){
    localStorage.removeItem('accessToken')
  }
  getUser() {
    return localStorage.getItem('accessToken');
  }
  public parseToken() {
    // const base64Url = token.split('.')[1];
    // const base64 = decodeURIComponent(atob(base64Url).split('').map((c)=>{
    //   return '%' + ('00'+c.charCodeAt(0).toString(16)).slice(-2)
    // }).join(''));
    // return JSON.parse(base64)

    const token = this.getUser();
    if (token) {
      try {
        const data = jwt_decode(token);
        // console.log(data);
        return data;
      } catch (Error) {
        return null;
      }
    }
    return null;
  }

}
