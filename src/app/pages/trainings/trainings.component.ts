import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TrainingsService } from 'src/app/services/trainings.service';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingsComponent {

  url = 'https://api.dev.padcllc.com/'
  public trainings$!: Observable<any>;
  constructor(private router: Router,
    private trainingsService: TrainingsService) {
    this.showProjects()
  }

  showProjects() {
    this.trainings$ = this.trainingsService.trainings
    this.trainingsService.getAllTraining().subscribe()
  }

  public edit(id: number) {
    this.router.navigate(['main-layout','trainings', 'trainings-detail', id])
  }
}


