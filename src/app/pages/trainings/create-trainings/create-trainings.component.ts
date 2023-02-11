import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
  selector: 'app-create-trainings',
  templateUrl: './create-trainings.component.html',
  styleUrls: ['./create-trainings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateTrainingsComponent {
  public form: FormGroup
  public errorMessage: [] = []
  constructor(private _fb: FormBuilder,
    public trainingsService: TrainingsService,
    private router: Router) {
    this.form = _fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required],
      date: [null, Validators.required],
      type: [null, Validators.required]
    })
  }
  getFile(event: Event) {
    const file = (event.target as HTMLInputElement).files![0]
    this.form.get('image')?.setValue(file)
  }
  save() {
    if (this.form.valid) {
    console.log(this.form.value);

     const model = this.trainingsService.createData(this.form)
      this.trainingsService.addTraining(model).subscribe(
        (response) => {
          console.log(response, 'resp');
          this.router.navigate(['main-layout/trainings'])
        },
        (err) => {
          console.log(err, 'err');
        }
      )
    }
  }
}
