import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Files } from '../../models/model';

@Component({
  selector: 'app-trainings-detail',
  templateUrl: './trainings-detail.component.html',
  styleUrls: ['./trainings-detail.component.css']
})
export class TrainingsDetailComponent {
  public isEdit: boolean = false
  public form: FormGroup
  public trainings!: any
  public id!: number;

  constructor(private _fb: FormBuilder,
    public trainingsService: TrainingsService,
    private router: Router,
    private route: ActivatedRoute) { 
      route.data.subscribe((data)=>{
        this.trainings = data['trainingDetail']
      }) 
      console.log(this.trainings.date, );
    this.form = _fb.group({
      name: [this.trainings.name, Validators.required],
      description: [this.trainings.description, Validators.required],
      mediaFiles: [this.trainings.mediaFiles, Validators.required],
      date: [this.trainings.date, Validators.required],
      type: [this.trainings.type, Validators.required]
    })
    this.form.disable();
    console.log(this.form.value.date)
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
  updateProject(){
    console.log(this.form.value);
    console.log(this.form.valid);
    
    if(this.form.valid) {
      const project = this.trainingsService.updateTrinings(this.id,this.form.value);
      project.subscribe(data => {
        console.log(data);
        this.router.navigate(['/main-layout/projects']);
      });
    }
  }
}
