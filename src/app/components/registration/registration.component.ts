import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public submit: boolean = false
  public roles!: any
  public errors: any = {}
  public errors1!: any

  public signUpForm!: FormGroup
  constructor(private _fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
  ) {
    this.signUpForm = _fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      roleId: [null, Validators.required]
    })
    this.userService.getRoles()
      .pipe(
        map(role => role.data)
      ).subscribe(data => {
        this.roles = data;
      });
  }

  signUp() {
    this.submit = true
    this.checkErrors()

    if (this.signUpForm.valid) {
      const user = this.userService.signUp(this.signUpForm.value)
      user.subscribe(data => {
        console.log(data, 'data');

        if (data.success) {
          this.router.navigate(['/login']);
        }
      },
        (err) => {
          this.errors1 = err.error.error.message;
          console.log(this.errors1,' err 1');
        })
    }
  }

  checkErrors() {
    if (this.signUpForm.get('firstName')?.touched || this.submit) {
      const errors = this.signUpForm.get('firstName')?.errors;
      if (errors) {
        this.errors.firstName = errors;
      } else {
        this.errors.firstName = false;
      }
    }
    if (this.signUpForm.get('lastName')?.touched || this.submit) {
      const errors = this.signUpForm.get('lastName')?.errors;
      if (errors) {
        this.errors.lastName = errors;
      } else {
        this.errors.lastName = false;
      }
    }
    if (this.signUpForm.get('email')?.touched || this.submit) {
      const errors = this.signUpForm.get('email')?.errors;
      console.log(errors, 'errors');
      if (errors) {
        this.errors.email = errors;
        console.log(this.errors);
      } else {
        this.errors.email = false;
      }
    }
    if (this.signUpForm.get('password')?.touched || this.submit) {
      const errors = this.signUpForm.get('password')?.errors;
      if (errors) {
        this.errors.password = errors;
        console.log(this.errors);
      } else {
        this.errors.password = false;
      }
    }

    if (this.signUpForm.get('roleId')?.touched || this.submit) {
      const errors = this.signUpForm.get('roleId')?.errors;
      if (errors) {
        this.errors.roleId = errors;
      } else {
        this.errors.roleId = false;
      }
    }
  }
}


