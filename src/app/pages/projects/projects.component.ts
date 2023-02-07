import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public projects: any;
  constructor(private router: Router,
    public projectService: ProjectService) {
    this.showProjects()
  }
  
  showProjects() {
    this.projectService.getAllProjects().subscribe(resp => {
      this.projects = resp.data
      // console.log(this.projects);
    })
  }

  public delete(id: number) {
    this.projectService.delete(id).subscribe((resp) => {
      console.log(resp);
      // window.location.reload();
      this.showProjects()

    })
  }
  public edit(id: number) {
    this.router.navigate(['main-layout','projects','project',id])
  } 
}
