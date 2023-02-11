import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, pipe } from 'rxjs';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class ProjectsComponent {
  public projects$!: Observable<any>;
  constructor(private router: Router,
    public projectService: ProjectService) {
    this.showProjects()
  }

  showProjects() {
    this.projects$ = this.projectService.projects
    this.projectService.getAllProjects().subscribe()
  }

  public delete(id: number) {
    this.projectService.delete(id).subscribe()
  }
  public edit(id: number) {
    this.router.navigate(['main-layout', 'projects', 'project', id])
  }
}
