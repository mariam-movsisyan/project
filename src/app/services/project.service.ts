import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    projects: any;
    constructor(private http: HttpClient) {
    }
    addProject(project: any) {
        return this.http.post<any>('/projects', project);
    }
    getAllProjects() {
        return this.http.get<any>('/projects/all');
    }

    delete(id: number) {
        return this.http.delete<any>(`/projects/${id}`);
    }
    getProjectById(id: number) {
        return this.http.get<any>(`/projects/${id}`);
    }
    updateProject(id: number, project: any) {
        return this.http.put<any>(`/projects/${id}`, project);
    }

}
