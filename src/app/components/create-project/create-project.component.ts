import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  public form: FormGroup
  constructor(private _fb: FormBuilder,
    public projectService: ProjectService,
    private router: Router) { 
    this.form = _fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  save(){
    if(this.form.valid){
      const user = this.projectService.addProject(this.form.value);
      user.subscribe((data)=>{
        // console.log(data);
        
        this.router.navigate(['main-layout/projects'])
      })
    }
  }
}
