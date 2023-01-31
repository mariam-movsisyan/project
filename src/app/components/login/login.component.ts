import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public errorMessage: any = {}
  public loginForm: FormGroup
  constructor(private _fb: FormBuilder,
    private router: Router,
    private userService: UserService) {
    this.loginForm = _fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  public formIsValid() {
    const errors = this.loginForm.get('email')?.errors;
    const errors1 = this.loginForm.get('password')?.errors
    if (errors?.['required'] || errors1?.['required']) {
      this.errorMessage.required = errors || errors1;
      console.log(this.errorMessage);
    } else {
      this.errorMessage.required = false;
    }
    if (errors?.['email'] || errors1?.['minlength']) {
      this.errorMessage.error = errors || errors1;
      // console.log(this.errorMessage.error); 
    } else {
      this.errorMessage.error = false;
    }
  }
  login() {
    this.formIsValid()
    console.log(this.loginForm.valid);

    if (this.loginForm.valid) {
      const user = this.userService.login(this.loginForm.value)
        .subscribe(response => {
          this.errorMessage = {}
          localStorage.setItem('accessToken', response.data.accessToken)
          console.log(response);
          this.router.navigate(['/main-layout/dashboard']);
        },
          (err) => {

            this.errorMessage = err.error.error
            console.log(this.errorMessage);
          })
    }
  }
}
