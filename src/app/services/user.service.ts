import { Injectable } from '@angular/core';

interface IUser {
  email: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  login(_user: IUser): boolean {
    const filter: any = {
      email: _user.email,
      password: _user.password
    }
    const getUser: any = localStorage.getItem('user');
    const user = JSON.parse(getUser);

    const findUser = user.find(function (iUser: any) {
      for (let i in filter) {
        if (iUser[i] === undefined || iUser[i]! != filter[i]) {
          return false
        }
      }
      return true;
    })

    if (findUser) {
      localStorage.setItem('logedInUser', JSON.stringify(findUser));
      return true
    } else {
      return false
    }
  }

  logout(){
    localStorage.removeItem('logedInUser');
  }
}
