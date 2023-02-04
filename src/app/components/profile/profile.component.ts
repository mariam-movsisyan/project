import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public edit: boolean = false
  public values!: any
  public form: FormGroup
  constructor(private _fb: FormBuilder,
    private userService: UserService,
    private http: HttpClient,
    private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.values = data['profile'];
    })

    this.form = _fb.group({
      firstName: [this.values.firstName],
      lastName: [this.values.lastName],
      phone: [null],
      email: [this.values.email],
      password: [this.values.password],
    })

    this.form.disable();
  }


  isEdit() {
    this.edit = !this.edit
    if (this.edit === true) {
      return this.form.enable()
    } else {
      return this.form.disable()

    }
  }

}


