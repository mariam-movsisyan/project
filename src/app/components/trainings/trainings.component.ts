import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingsService } from 'src/app/services/trainings.service';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent {


  public trainings: any;
  constructor(private router: Router,
    private trainingsService: TrainingsService) {
    this.showProjects()
  }
  showProjects() {
    this.trainingsService.getAllTraining().subscribe(resp => {
      this.trainings = resp.data
      // console.log(this.trainings);
    })
  }

  public deleteVacancy(id: number) {
    this.trainingsService.delete(id).subscribe((resp) => {
      console.log(resp);
      this.showProjects()
    }, err => {
      console.log(err);

    })
  }
  public edit(id: number) {
    this.router.navigate(['/main-layout/trainings-detail/', id])
  }

}


