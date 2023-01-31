import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public values!: any
  public form: FormGroup
  constructor(private _fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private http: HttpClient) {

    this.values = userService.parseToken()

    this.form = _fb.group({
      id: [this.values.id],
      firstName: [this.values.firstName],
      lastName: [this.values.lastName],
      phone: [null],
      email: [this.values.email],
      password: [this.values.password],
      roleId: [this.values.roleId],

    })

    this.form.disable();
  }
 

  isEdit() {
    const value = this.authService.isEdit()
    if (value == false) {
      this.authService.edit()
      return this.form.enable()
    }
  }
  isSaved() {
    const value = this.authService.isEdit()
    if (value == true) {
      this.authService.save()
      
      return this.form.disable()
    }
  }
}


