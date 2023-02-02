import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  public id!: number;
  public values: any
  public form: FormGroup
  constructor(private _fb: FormBuilder,
    public projectService: ProjectService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.data.subscribe((data)=>{
        this.values = data['detail'];
        console.log(this.values.title); 
      })
    this.form = _fb.group({
      title: [this.values.title, Validators.required],
      description: [this.values.description, Validators.required],
    })
    this.form.disable();
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      console.log((params));
      this.id = params['id']
      
    })
    
  }
  edit() {
    const value = this.authService.isEdit()
    if (value == false) {
      this.authService.edit()
      return this.form.enable()
    }
  }
  save() {
    const value = this.authService.isEdit()
    if (value == true) {
      this.authService.save()
      this.updateProject()
      return this.form.disable()
    }
  }
  updateProject(){
    if(this.form.valid) {
      const project = this.projectService.updateProject(this.id,this.form.value);
      project.subscribe(data => {
        console.log(data);
        this.router.navigate(['/main-layout/projects']);
      });
    }
  }
}
