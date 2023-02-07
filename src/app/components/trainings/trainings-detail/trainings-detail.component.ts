import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';

enum Type {
  free,
  paid
}
export type training = {
  name: string,
  description: string,
  iamge: any,
  date: Date,
  type: Type
}
@Component({
  selector: 'app-trainings-detail',
  templateUrl: './trainings-detail.component.html',
  styleUrls: ['./trainings-detail.component.css']
})
export class TrainingsDetailComponent implements OnInit {
  public isEdit: boolean = false
  public form: FormGroup
  public trainings!: training
  public id!: number;

  constructor(private _fb: FormBuilder,
    public trainingsService: TrainingsService,
    private router: Router,
    private route: ActivatedRoute) {

    route.data.subscribe((data) => {
      this.trainings = data['trainingDetail']
    })

    this.form = _fb.group({
      name: [this.trainings.name, Validators.required],
      description: [this.trainings.description, Validators.required],
      image: [null, Validators.required],
      date: [this.trainings.date, Validators.required],
      type: [this.trainings.type, Validators.required]
    })
    this.form.disable();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
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

  getFile(event: Event) {
    const file = (event.target as HTMLInputElement).files![0]
    this.form.get('image')?.setValue(file);
  }

  save() {
    if (this.isEdit == true) {
      this.updateProject()
      this.isEdit = !this.isEdit
      this.form.disable()
    }
  }
  updateProject() {
    console.log(this.form.get('image'));
    console.log(this.form);
    // if(this.form.valid) {
    const model = this.trainingsService.createData(this.form)

    this.trainingsService.updateTrinings(this.id, model)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/main-layout/trainings']);
      }, err => {
        console.log(err);

      });
    // }
  }
}
