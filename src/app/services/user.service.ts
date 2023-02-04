import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { 
  }

  public getRoles() {
    return this.http.get<any>("/role/all");
  }

  public signUp(data: any) {
    const { roleId, ...user } = data;
    user.roleId = +roleId;
    return this.http.post<any>('/auth/registration', user)
  }
  login(user: any) {
    return this.http.post<any>("/auth/login", user);
  }
  
  public logout(){
    localStorage.removeItem('accessToken')
  }
  getUser() {
    return this.http.get<any>("/user/me"); 
  }

}
