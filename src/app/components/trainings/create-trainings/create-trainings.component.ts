import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Files } from '../../models/model';

@Component({
  selector: 'app-create-trainings',
  templateUrl: './create-trainings.component.html',
  styleUrls: ['./create-trainings.component.css']
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
      mediaFiles: [null, Validators.required],
      date: [null, Validators.required],
      type: [null, Validators.required]
    })
  }
  save(){
    console.log('aaa');
    console.log(this.form.value);
    if(this.form.valid){
      const model = new Files(this.form.value)
      console.log(model);
      const user = this.trainingsService.addTraining(model);
      user.subscribe((data)=>{
        // console.log(data);
        this.router.navigate(['main-layout/trainings'])
      }, 
      (error)=>{
        console.log(error.error.message);
      })
    }
  }

}
