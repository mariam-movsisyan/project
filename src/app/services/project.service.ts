import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe, Subject, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    public projects: Subject<any> = new Subject;
    constructor(private http: HttpClient) {
    }
    addProject(project: any) {
        return this.http.post<any>('/projects', project);
    }
    getAllProjects() {
        return this.http.get<any>('/projects/all')
            .pipe(map(({ data }) => {
                console.log(data, 'data');
               return this.projects.next(data)
            }))
    }

    delete(id: number) {
        return this.http.delete<any>(`/projects/${id}`)
        .pipe(switchMap(() => {
          return this.getAllProjects()
        }))
    }
    getProjectById(id: number) {
        return this.http.get<any>(`/projects/${id}`);
    }
    updateProject(id: number, project: any) {
        return this.http.put<any>(`/projects/${id}`, project);
    }
   
}
