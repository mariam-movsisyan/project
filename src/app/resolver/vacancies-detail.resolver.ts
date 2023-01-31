import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, map, catchError } from 'rxjs';
import { VacanciesService } from '../services/vacancies.service';

@Injectable({
  providedIn: 'root'
})
export class VacanciesDetailResolver implements Resolve<boolean> {
  id: any;
  constructor(private vacanciesService: VacanciesService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.vacanciesService.getVacanciesById(route.params['id']).pipe(map(project => project.data,
      catchError(error => {
        return 'Not found';
      })));
  }
}
