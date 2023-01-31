import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  public data: any;
  public name!: string
  public isTrue: boolean = false
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.data = this.userService.parseToken()
    // console.log(this.data);
    this.name = this.data.firstName + " " + this.data.lastName
  }
  openMenu() {
    this.isTrue = !this.isTrue
  }
  logOut(){
    this.userService.logout()
    this.router.navigate(['/login'])
  }
}
