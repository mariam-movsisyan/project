import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { VacanciesService } from 'src/app/services/vacancies.service';

@Component({
  selector: 'app-create-vacancies',
  templateUrl: './create-vacancies.component.html',
  styleUrls: ['./create-vacancies.component.css']
})
export class CreateVacanciesComponent {
  public form: FormGroup
  constructor(private _fb: FormBuilder,
    public vacanciesService: VacanciesService,
    private router: Router) {
    this.form = _fb.group({
      description: [null, Validators.required],
      shortDescription: [null, Validators.required],
    })
  }

  save() {
    if (this.form.valid) {
      // console.log(this.form.value);
      const user = this.vacanciesService.addVacancy(this.form.value);
      user.subscribe((data) => {
        console.log(data);
        this.router.navigate(['main-layout/vacancies'])
      })
    }
  }

}
