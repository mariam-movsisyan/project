import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formValidation: FormGroup
  constructor(
    private _fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.formValidation = _fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })

    localStorage.setItem('user', JSON.stringify([{ firstName: 'User', lastName: 'lastName', phone: '+37477777777', email: 'test@gmail.com', password: 'test' }]));
  }
  getValues() {
    const email = (this.formValidation.get('email') as FormControl).value
    const password = (this.formValidation.get('password') as FormControl).value
    return {
      email,
      password
    }
  }

  login(): boolean {
    const values = this.getValues()

    if (this.userService.login(values)) {
      // this.router.navigate(['/home'])
      return true
    } else {

      return false
    }
  }

  showErrors1(): boolean {
    if ((this.formValidation.get('email')?.hasError('required') && this.formValidation.get('email')?.touched) ||
      (this.formValidation.get('password')?.hasError('required') && this.formValidation.get('password')?.touched)) {
      this.formValidation.markAllAsTouched();
      return true
    }
    return false
  }

  showErrors(): boolean {
    if ((this.formValidation.get('email')?.hasError('required') && this.formValidation.get('email')?.touched) ||
      (this.formValidation.get('password')?.hasError('required') && this.formValidation.get('password')?.touched)) {
      this.formValidation.markAllAsTouched();
      return true
    }
    return false
  }

  usertExist() {
    if (this.formValidation.valid && this.login() === false) {
      return true;
    } else {
      return false;
    }
  }
}
