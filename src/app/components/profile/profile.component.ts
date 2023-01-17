import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public values!: any
  public form: FormGroup
  constructor(private _fb: FormBuilder,
    public authService: AuthService) {
    let x = localStorage.getItem('user') as string;
    let y = JSON.parse(x)
    this.values = y[0]
    console.log(this.values);
    
    this.form = _fb.group({
      firstName: [this.values.firstName, Validators.required],
      lastName: [this.values.lastName, Validators.required],
      phone: [this.values.phone, Validators.required],
      email: [this.values.email, Validators.required],
      password: [this.values.password]
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
      console.log(this.values);
      
      localStorage.setItem('user', JSON.stringify([{
        firstName: this.form.get('firstName')?.value,
        lastName: this.form.get('lastName')?.value,
        phone: this.form.get('phone')?.value,
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
      }]));
      localStorage.setItem('logedInUser',localStorage.getItem('user') as string)
      return this.form.disable()
    }
  }
}
