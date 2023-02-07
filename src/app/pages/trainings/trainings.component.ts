import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {

  url = 'https://api.dev.padcllc.com/'
  public trainings: any;
  constructor(private router: Router,
    private trainingsService: TrainingsService) {
    this.showProjects()
  }

  showProjects() {
    this.trainingsService.getAllTraining().subscribe(resp => {
      this.trainings = resp.data
    })
  }

  public edit(id: number) {
    this.router.navigate(['main-layout','trainings', 'trainings-detail', id])
  }
}


