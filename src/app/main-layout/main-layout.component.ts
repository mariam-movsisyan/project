import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  public name!: any
  public isTrue: boolean = false
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    let x = localStorage.getItem('user') as string;
    let y = JSON.parse(x)
    this.name = y[0].firstName + " " + y[0].lastName

  }
  openMenu() {
    this.isTrue = !this.isTrue
  }
  logOut(){
    this.userService.logout()
    this.router.navigate(['/login'])
  }
}
