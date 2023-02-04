import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VacanciesService } from 'src/app/services/vacancies.service';

@Component({
  selector: 'app-vacancies-detail',
  templateUrl: './vacancies-detail.component.html',
  styleUrls: ['./vacancies-detail.component.css']
})
export class VacanciesDetailComponent implements OnInit {

  public isEdit: boolean = false
  public id!: number;
  public values: any
  public form: FormGroup;
  public date: any;
  constructor(private _fb: FormBuilder,
    public vacanciesService: VacanciesService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      console.log(data);

      this.values = data['vacanciesDetail'];
      this.date = this.values.shortDescription
      console.log(typeof this.date);
    })
    this.form = _fb.group({
      description: [this.values.description, Validators.required],
      shortDescription: [this.values.shortDescription, Validators.required],
    })
    this.form.disable();
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log((params));
      this.id = params['id']

    })

  }
  edit() {
    this.isEdit = !this.isEdit
    if (this.isEdit === true) {
      return this.form.enable()
    } else {
      return this.form.disable()
    }
}
save() {
  if (this.isEdit == true) {
    this.updateProject()
    this.isEdit = !this.isEdit
    return this.form.disable()
  }
}
  updateProject() {
    if (this.form.valid) {
      const project = this.vacanciesService.updateVacancy(this.id, this.form.value);
      project.subscribe(data => {
        console.log(data);
        this.router.navigate(['/main-layout/vacancies']);
      }, (error => {
        console.log(error);

      }))
    }
  }
}