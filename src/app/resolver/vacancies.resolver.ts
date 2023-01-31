import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs';
import { VacanciesService } from '../services/vacancies.service';

@Injectable({
  providedIn: 'root'
})
export class VacanciesResolver implements Resolve<boolean> {
  constructor(private vacanciesService: VacanciesService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.vacanciesService.getAllVacancies().pipe(map(project => project.data,
      catchError(error => {
        return ('Not found');
      })));
  }
}