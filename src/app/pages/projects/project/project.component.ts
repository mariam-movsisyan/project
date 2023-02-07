import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  public id!: number;
  public isEdit: boolean = false
  public values: any
  public form: FormGroup
  constructor(private _fb: FormBuilder,
    public projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.data.subscribe((data)=>{
        this.values = data['detail'];
        // console.log(this.values.title); 
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
    if(this.form.valid) {
      const project = this.projectService.updateProject(this.id,this.form.value);
      project.subscribe(data => {
        // console.log(data);
        this.router.navigate(['/main-layout/projects']);
      });
    }
  }
}
