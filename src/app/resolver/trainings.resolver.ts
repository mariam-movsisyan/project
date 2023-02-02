import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs';
import { TrainingsService } from '../services/trainings.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingsResolver implements Resolve<boolean> {
  constructor(private trainingsService: TrainingsService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.trainingsService.getAllTraining().pipe(map(trainings => trainings.data,
      catchError(error => {
        return ('Not found');
      })));
  }
}