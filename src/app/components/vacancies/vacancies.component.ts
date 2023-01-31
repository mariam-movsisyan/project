import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { VacanciesService } from 'src/app/services/vacancies.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent {

  public vacancies: any;
  constructor(private router: Router,
    private vacanciesService: VacanciesService) {
    this.showProjects()
  }
  showProjects() {
    this.vacanciesService.getAllVacancies().subscribe(resp => {
      this.vacancies = resp.data
      console.log(this.vacancies);
    })
  }

  public deleteVacancy(id: number) {
    this.vacanciesService.delete(id).subscribe((resp) => {
      console.log(resp);
      this.showProjects()
    },err=>{
      console.log(err);
      
    })
  }
  public edit(id: number) {
    this.router.navigate(['/main-layout/vacancies-detail', id])
  } 

}
