import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public values!: any
  public form: FormGroup
  constructor(private _fb: FormBuilder) {
    let x = localStorage.getItem('user') as string;
    let y = JSON.parse(x)
    this.values = y[0]
    this.form = _fb.group({
      firstName: [this.values.firstName, Validators.required],
      surname: [this.values.lastName, Validators.required],
      phone: [this.values.phone, Validators.required],
      email: [this.values.email, Validators.required],
    })
  }


}
