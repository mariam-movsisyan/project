import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, map, catchError } from 'rxjs';
import { ProjectService } from "../services/project.service";

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<boolean> {
  constructor(private projectService: ProjectService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.projectService.getProjectById(route.params['id']).pipe(map(project => project.data,
      catchError(error => {
        return 'Not found';
      })));
  }
}
